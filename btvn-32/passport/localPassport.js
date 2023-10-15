const LocalStrategy = require("passport-local").Strategy;
const model = require("../models/index");
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
      console.log(111111111111);
      return;
    } else if (user.password !== password) {
      done(null, false, { message: "Invalid password" });
      console.log(
        `++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++`
      );
      return;
    } else {
      console.log(14165);
      done(null, user);
    }
  }
);
