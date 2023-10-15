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
    enableProof: true,
    profileFields: ["email", "displayName", "name"],
  },
  async (accessToken, refreshToken, profile, cb) => {
    const { displayName, email, profileUrl } = profile;
    // const [{ value: email }] = emails;
    console.log(1111111111111111111);
    console.log(email);
    console.log(profile);
    const provider = "facebook";
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
        name: displayName,
        provider_id: providerId,
      });
    }
    return cb(null, user);
  }
);
