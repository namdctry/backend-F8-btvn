const GoogleStrategy = require("passport-google-oidc");
const model = require("../models/index");
const Provider = model.Provider;
const User = model.User;
module.exports = new GoogleStrategy(
  {
    clientID: process.env["GOOGLE_CLIENT_ID"],
    clientSecret: process.env["GOOGLE_CLIENT_SECRET"],
    callbackURL: process.env.GOOGLE_CLIENT_URL,
    scope: ["profile", "email"],
  },
  async (issuer, profile, done) => {
    const { displayName, emails } = profile;
    const [{ value: email }] = emails;

    const provider = "google";
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
        email,
        provider_id: providerId,
      },
    });
    if (!user) {
      user = await User.create({
        name: displayName,
        email,
        provider_id: providerId,
      });
    }
    return done(null, user);
  }
);
