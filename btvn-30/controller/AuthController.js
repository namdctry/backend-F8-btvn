const bcrypt = require("bcrypt");
const model = require("../models/index");
const User = model.User;
const jwt = require("jsonwebtoken");
const { sendActivationEmail } = require("../ultis/sendActivationEmail");
const { token } = require("morgan");
const { where } = require("sequelize");
const secretKey = "your-secret-key";
module.exports = {
  login: async (req, res) => {
    // const msg = req.flash("error");
    const msg = req.flash("msg");
    // console.log(req.user);
    res.render("auth/login", { pageTitle: "Đăng nhập", msg });
  },
  handleLogin: async (req, res) => {
    res.redirect("/");
  },
  register: async (req, res) => {
    res.render("auth/register", { pageTitle: "Dang ki" });
  },
  handleRegister: async (req, res) => {
    const { name, email, password } = req.body;
    const salt = 10;
    bcrypt.hash(password, salt, async function (err, hash) {
      // Store hash in your password DB.
      const data = await User.create({ name, email, password: hash });
      console.log(data);
      if (data) {
        req.flash("msg", "dang ki thanh cong");
        res.redirect("/auth/login");
        return;
      }
      req.flash("msg", "vui long kiem tra thong tin");
      res.redirect("/auth/register");
    });
    return;
  },

  logout: (req, res, next) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/auth/login");
    });
  },
  forgetPw: (req, res, next) => {
    const msg = req.flash("msg");
    res.render("auth/forgetPw", { msg });
  },
  handleForgetPw: async (req, res) => {
    const { email } = req.body;
    console.log(email);
    const user = await User.findOne({ where: { email: email } });
    if (user) {
      const token = jwt.sign({ email: email }, secretKey, {
        expiresIn: "15m",
      });
      sendActivationEmail(email, token);
      req.flash("msg", "Vui lòng kiểm tra email");
      res.redirect("/auth/forgetPw");
    } else {
      req.flash("msg", "Người dùng không tồn tại");
      res.redirect("/auth/forgetPw");
    }
  },
  resetPw: async (req, res) => {
    const token = req.params.token;
    jwt.verify(token, secretKey, async (err, decoded) => {
      if (err) {
        return res.send("Liên kết hết hạn hoặc không hợp lệ!");
      } else {
        const user = await User.findOne({ where: { email: decoded.email } });

        const msg = `Cap nhap mat khau cua ${user.email}`;
        console.log(msg);
        console.log(11111111111111);
        if (user) {
          res.render("auth/resetPw", { msg });
        }
      }
    });
  },
  handleResetPw: async (req, res) => {
    const token = req.params.token;
    const decodeToken = jwt.verify(token, secretKey);
    const user = await User.findOne({ where: { email: decodeToken.email } });
    const { password } = req.body;
    const salt = 10;
    console.log(user);
    bcrypt.hash(password, salt, async function (err, hash) {
      user.update({ password: hash });
    });
    req.flash("msg", "Cập nhật mật khẩu thành công");
    res.redirect("/auth/login");
  },
};
