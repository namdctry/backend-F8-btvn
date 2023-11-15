const md5 = require("md5");
const { User, LoginToken } = require("../models/index");
module.exports = {
  login: (req, res) => {
    const { redirect } = req.query;
    res.render("auth/login", { redirect });
  },
  handleLogin: async (req, res) => {
    const loginToken = await LoginToken.findOne({
      where: {
        user_id: req.user.id,
      },
    });
    console.log(6666);
    console.log(req.user.id);
    const cookie = md5(Math.random());
    if (!loginToken) {
      await LoginToken.create({
        user_id: req.user.id,
        token: cookie,
      });
      res.cookie("loginToken", cookie, { httpOnly: true });
    } else {
      LoginToken.destroy({
        where: {
          user_id: req.user.id,
        },
      });
      console.log(3333);
      await LoginToken.create({
        user_id: req.user.id,
        token: cookie,
      });

      res.cookie("loginToken", cookie, { httpOnly: true });
    }
    if (req.query.redirect) {
      res.redirect("/auth/redirect?url=" + req.query.redirect);
    }
    res.redirect("/");
  },
};
