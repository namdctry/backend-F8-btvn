const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const model = require("../models/index");

module.exports = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async function (email, password, done) {
    const user = await model.User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      console.log(email);
      console.log(555555555);
      done(null, false, { message: "Email không tồn tại" });
      return;
    }

    const hash = user.password;
    bcrypt.compare(password, hash, (err, result) => {
      if (result) {
        done(null, user);
        return;
      }
      console.log(9999999);
      done(null, false, {
        message: "Mật khẩu không chính xác",
      });
    });
  }
);
