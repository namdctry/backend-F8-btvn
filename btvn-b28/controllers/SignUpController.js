const md5 = require("md5");
const model = require("../models/index");
const User = model.User;
const flash = require("express-flash");
const jwt = require("jsonwebtoken");
const { sendActivationEmail } = require("../utils/sendActivationEmail");

module.exports = {
  index: (req, res) => {
    const msg = req.flash("msg");
    res.render("signUp/signUp", { msg });
  },
  handleSignUp: async (req, res) => {
    const user = await User;
    const { email, password } = req.body;

    const token = jwt.sign({ email }, "secret-key", { expiresIn: "1h" });
    const [users, created] = await user.findOrCreate({
      where: { email: email },
      defaults: {
        password: md5(password),
      },
    });
    if (created) {
      sendActivationEmail(email, token);
      req.flash(
        "msg",
        "Tạo tài khoản thành công! Kiểm tra email để kích hoạt tài khoản"
      );
    } else {
      req.flash("msg", "Tài khoản đã tồn tại! Đăng nhập ngay");
    }
    res.redirect("/login");
  },
  handleActive: async (req, res) => {
    const { token } = req.params;
    const decodedToken = jwt.verify(token, "secret-key");
    // console.log(decodedToken);
    const user = await User.findOne({ where: { email: decodedToken.email } });
    if (!user || user.status !== 0) {
      console.log(111111111111111);
      return res.send("Liên kết hết hạn hoặc không hợp lệ!");
    }
    await user.update({ status: 1 });

    req.flash("msg", "Kích hoạt tài khoản thành công! Đăng nhập ngay!");
    return res.redirect("/login");
  },
};
