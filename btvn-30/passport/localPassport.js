const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const model = require("../models/index");
const bcrypt = require("bcrypt");
module.exports = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async function (email, password, done) {
    const user = await model.User.findOne({
      where: { email: email },
    });
    if (!user) {
      done(null, false, { message: "email khong ton tai" });
      return;
    }
    const hash = user.password;
    bcrypt.compare(password, hash, (err, result) => {
      if (result) {
        done(null, user);
        return;
      }
      done(null, false, { message: "mat khau khong hop le" });
    });
  }
);
