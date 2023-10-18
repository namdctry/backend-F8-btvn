const LocalStrategy = require("passport-local").Strategy;
const model = require("../models/index");
const hash = require("../utils/hash");
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
      done(null, false, { message: "email do not exist" });
      return;
    } else if (!hash.check(password, user.password)) {
      done(null, false, { message: "Invalid password" });
      return;
    } else {
      done(null, user);
    }
  }
);
