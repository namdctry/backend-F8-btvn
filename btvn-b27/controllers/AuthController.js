const model = require("../models/index");
const User = model.User;
const md5 = require("md5");

module.exports = {
  index: async (req, res) => {
    const msg = req.flash("msg");
    // console.log(req.body);
    res.render("auth/login", { msg });
    // res.send("hello");
  },

  handeLogin: async (req, res) => {
    const { email, password } = req.body;
    console.log(`hande login`);
    console.log(req.body);
    const user = await User.findOne({
      where: { email, password: md5(password) },
    });
    if (user?.dataValues) {
      //login success
      req.session.userLogin = user.dataValues;
    } else {
      //login failed
      req.flash("msg", "Email hoặc mật khẩu không chính xác");
    }

    res.redirect("/auth/login");
  },

  logout: (req, res) => {
    req.session.destroy();
    res.redirect("/auth/login");
  },
};
