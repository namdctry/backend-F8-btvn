const md5 = require("md5");
const User = require("../models/User");

module.exports = {
  index: (req, res) => {
    const msg = req.flash("msg");
    res.render("signUp/signUp", { msg });
  },
  handleSignUp: async (req, res) => {
    const user = await User;
    const { email, password } = req.body;
    const [users, created] = await user.findOrCreate({
      where: { email: email },
      defaults: {
        password: md5(password),
      },
    });
    if (created) {
      req.flash("msg", "Tạo tài khoản thành công");
    } else {
      req.flash("msg", "Tài khoản đã tồn tại! Đăng nhập ngay");
    }
    res.redirect("/login");
  },
};
