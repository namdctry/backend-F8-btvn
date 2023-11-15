const md5 = require("md5");
const { User, LoginToken, TwoFA } = require("../models/index");
const nodemailer = require("nodemailer");
const { Op } = require("sequelize");
module.exports = {
  login: (req, res) => {
    const { redirect } = req.query;
    res.render("auth/login", { redirect });
  },
  handleLogin: async (req, res) => {
    const { email } = req.body;
    console.log(`handleLogin`);
    console.log(6666);
    req.twoFA = true;
    const loginToken = await LoginToken.findOne({
      where: {
        user_id: req.user.id,
      },
    });
    const cookie = md5(Math.random());
    if (!loginToken) {
      await LoginToken.create({
        user_id: req.user.id,
        token: cookie,
      });
      res.cookie("loginToken", cookie, { httpOnly: true });
    } else {
      LoginToken.destroy({
        where: {
          user_id: req.user.id,
        },
      });
      await LoginToken.create({
        user_id: req.user.id,
        token: cookie,
      });

      res.cookie("loginToken", cookie, { httpOnly: true });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "nam2002bv@gmail.com",
        pass: "zkux xrwc zmza irnm",
      },
    });
    const otp = Math.floor(Math.random() * 10000);
    await transporter.sendMail({
      from: `ng nam F8 <nam2002bv@gmail.com>`, // sender address
      to: email, // list of receivers
      subject: `Xin chào: ${email}`, // Subject line
      html: `Xin chào bạn , mã xác thực bạn là ${otp}`,
    });

    await TwoFA.destroy({
      where: {
        user_id: req.user.id,
      },
    });
    await TwoFA.create({
      user_id: req.user.id,
      otp: otp,
    });

    if (req.query.redirect) {
      res.redirect("/auth/redirect?url=" + req.query.redirect);
      return;
    }

    res.redirect("/auth/2fa");
  },
  twoFA: (req, res) => {
    const { redirect } = req.query;
    res.render("2fa", { redirect });
  },
  handleTwoFA: async (req, res) => {
    const { otp } = req.body;
    const check = await TwoFA.findOne({
      where: {
        [Op.and]: [{ user_id: req.user.id }, { otp: otp }],
      },
    });
    if (check) {
      if (req.query.redirect) {
        res.redirect("/auth/redirect?url=" + req.query.redirect);
        return;
      }

      res.redirect("/");
      return;
    } else {
      res.redirect("/auth/2fa");
      return;
    }
  },
};
