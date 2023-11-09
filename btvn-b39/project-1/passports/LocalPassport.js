const { User } = require("../models/index");
const bcrypt = require("bcrypt");
var LocalStrategy = require("passport-local").Strategy;
module.exports = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },

  async function (email, password, done) {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    if (!user) {
      return done(null, false, { message: "email does not exist" });
    }
    const check = bcrypt.compareSync(password, user.password);
    if (!check) {
      return done(null, false, { message: "password does not match" });
    }
    return done(null, user);
  }
);
