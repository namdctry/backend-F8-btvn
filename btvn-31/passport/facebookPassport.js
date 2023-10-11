var FacebookStrategy = require("passport-facebook");

const model = require("../models/index");
const Provider = model.Provider;
const User = model.User;
module.exports = new FacebookStrategy(
  {
    clientID: process.env["FACEBOOK_CLIENT_ID"],
    clientSecret: process.env["FACEBOOK_CLIENT_SECRET"],
    callbackURL: process.env.FACEBOOK_CLIENT_URL,
    state: true,
    profileFields: [, "email", "name", "profile"],
  },
  async (accessToken, refreshToken, profile, cb) => {
    console.log(profile);
    cb(null, profile);
  }
);
