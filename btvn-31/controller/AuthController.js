const bcrypt = require("bcrypt");
const model = require("../models/index");
const User = model.User;
const passport = require("passport");
const { redirect } = require("../passport/localPassport");
module.exports = {
  login: async (req, res) => {
    const msg = req.flash("error");

    res.render("auth/login", { pageTitle: "Đăng nhập", msg });
  },
  handleLogin: async (req, res) => {
    console.log(9999999999);
    console.log(req.body);
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
  loginGoogle: (req, res) => {
    res.send("Google");
  },
};
