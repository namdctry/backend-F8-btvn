const model = require("../models/index");
const User = model.User;
module.exports = {
  login: async (req, res) => {
    console.log(111111);
    const msg = req.flash("error");
    console.log(msg);
    res.render("auth/login", { msg });
  },
  handleLogin: async (req, res) => {
    res.redirect("/users");
  },
  logout: (req, res) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/auth/login");
    });
  },
};
