const bcrypt = require("bcrypt");

const model = require("../models/index");
const User = model.User;
const BlackList = model.BlackList;
const jwt = require("../utils/jwt");
const { Op } = require("sequelize");
const SendMail = require("../jobs/SendMail");
const Event = require("../core/Event");

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      res.status(400).json({
        status: "error",
        message: "Authentication Failed",
      });
      return;
    }
    const { password: hash } = user;
    const status = bcrypt.compareSync(password, hash);
    if (!status) {
      res.status(400).json({
        status: "error",
        message: "Authentication Failed",
      });
      return;
    }

    //Tạo accessToken và refreshToken
    const token = jwt.createToken({ userId: user.id });
    const refreshToken = jwt.createRefresh();
    //Lưu refreshToken vào Database
    const updateStatus = await User.update(
      {
        refreshToken: refreshToken,
      },
      {
        where: {
          id: user.id,
        },
      }
    );

    if (!updateStatus) {
      res.status(500).json({
        status: "error",
        message: "Server Error",
      });
      return;
    }

    res.json({
      status: "success",
      accessToken: token,
      refreshToken,
    });
  },

  profile: async (req, res) => {
    const { JWT_SECRET } = process.env;
    const authorization = req.headers["authorization"];
    const token = authorization.replace("Bearer", "").trim();
    try {
      const blacklist = BlackList.findOne({
        value: token,
      });
      if (blacklist) {
        res.status(401).json({
          status: "error",
          message: "does not token exist",
        });
      }
      const decoded = jwt.decode(token);

      if (decoded) {
        const { userId } = decoded;
        const user = await User.findOne({
          where: {
            id: userId,
          },
          attributes: ["id", "name", "email", "createdAt", "updatedAt"],
        });
        if (!user) {
          res.json({
            status: "error",
            message: "User not exist",
          });
          return;
        }
        res.json({ status: "success", data: user });
      }
    } catch (e) {
      console.log(e);
      res.status(401).json({
        status: "error",
        message: "Unauthorize",
      });
    }
  },

  refreshToken: async (req, res) => {
    //Nhận: refreshToken
    const { refreshToken } = req.body;
    if (!refreshToken) {
      res.status(400).json({
        status: "error",
        message: "refreshToken required",
      });
      return;
    }

    try {
      jwt.decode(refreshToken);
      //Verify với Database
      const user = await User.findOne({
        where: {
          refreshToken: refreshToken,
        },
      });

      //Nếu user không tồn tại -> Trả về thông báo lỗi
      if (!user) {
        res.status(401).json({
          status: "error",
          message: "Unauthorize",
        });
        return;
      }
      //Nếu user tồn tại -> Hợp lệ -> Tạo accessToken mới và refreshToken
      const token = jwt.createToken({ userId: user.id });
      const newRefreshToken = jwt.createRefresh();

      //Lưu refreshToken vào Database
      const updateStatus = await User.update(
        {
          refreshToken: refreshToken,
        },
        {
          where: {
            id: user.id,
          },
        }
      );

      if (!updateStatus) {
        res.status(500).json({
          status: "error",
          message: "Server Error",
        });
        return;
      }

      res.json({
        status: "success",
        accessToken: token,
        refreshToken: newRefreshToken,
      });
    } catch (e) {
      console.log(e);
      res.status(401).json({
        status: "error",
        message: "Unauthorize",
      });
      return;
    }

    //Ra: accessToken mới và refreshToken mới
  },
  logout: async (req, res) => {
    const authorization = req.headers["authorization"];
    const token = authorization.replace("Bearer", "").trim();
    try {
      const decode = jwt.decode(token);
      console.log(decode);
      if (!decode) {
        res.status(401).json({
          status: "error",
          message: "unauthorized",
        });
      }
      const blacklist = await BlackList.findOne({
        where: {
          [Op.and]: [
            {
              value: token,
            },
            {
              userId: decode.userId,
            },
          ],
        },
      });
      console.log(blacklist);
      if (blacklist) {
        res.status(401).json({
          status: "error",
          message: "unauthorized",
        });
        return;
      }
      BlackList.create({ value: token, userId: decode.userId });
      const user = await User.update(
        { refreshToken: null },
        {
          where: {
            id: decode.userId,
          },
        }
      );
      res.json({
        status: "success",
        message: "logout successfully",
      });
    } catch (e) {
      console.log(e);
      res.status(401).json({
        status: "error",
        message: "unauthorized",
      });
    }
  },
  sendMail: async (req, res) => {
    const fakeMails = [
      {
        name: "Nam 1",
        email: "nam1@gmail.com",
      },
      {
        name: "Nam 2",
        email: "nam2@gmail.com",
      },
      {
        name: "Nam 3",
        email: "nam3@gmail.com",
      },
      {
        name: "Nam 4",
        email: "nam4@gmail.com",
      },
      {
        name: "Nam 5",
        email: "nam5@gmail.com",
      },
    ];

    try {
      fakeMails.forEach(async (mail) => {
        const { name, email } = mail;
        await new Event(
          new SendMail({
            name,
            email,
          })
        );
      });

      res.json({
        status: "success",
        message: "Add work success",
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: "server error",
      });
    }
  },
};

/*
Khi accessToken hết hạn -> Gửi refreshToken lên Server -> Kiểm tra refeshToken hợp lệ
- Vẫn sống
- Tồn tại -> Decode ra userId -> userId khớp với Database
- Kiểm tra refresh tồn tại trong bảng users

Tình huống: khi accessToken được cấp lại -> refreshToken cũng được cấp lại -> Vẫn tồn tại refreshToken cũ hợp lệ

Giải pháp: Khi 1 refresh được tạo -> Lưu lại refresh khớp 1 userId

Khi tạo refresh mới -> xóa refresh cũ

AccessToken: Lưu ở Client
RefreshToken: Lưu ở Client và Server
*/
