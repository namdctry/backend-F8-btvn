const model = require("../models/index");
const Provider = model.Provider;
const User = model.User;
const GithubStrategy = require("passport-github");

module.exports = new GithubStrategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CLIENT_URL,
    profileFields: ["email", "username", "_raw"],
  },
  async (accessToken, refreshToken, profile, cb) => {
    const { displayName, username, _raw } = profile;
    // const [{ value: email }] = emails;
    // console.log(_raw);
    // console.log(1111111111111111111);
    // console.log(username);
    console.log(profile);
    const provider = "github";
    let providerDetail = await Provider.findOne({
      where: {
        name: provider,
      },
    });
    let providerId;
    if (!providerDetail) {
      providerDetail = await Provider.create({
        name: provider,
      });
    }
    providerId = providerDetail.id;
    console.log(providerId);

    let user = await User.findOne({
      where: {
        provider_id: providerId,
      },
    });
    if (!user) {
      user = await User.create({
        name: username,
        provider_id: providerId,
      });
    }
    return cb(null, user);
  }
);
