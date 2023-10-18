const uid = require("uid2");
const model = require("../models/index");
const User = model.User;
const Link = model.Link;
module.exports = {
  index: async (req, res) => {
    const links = await Link.findAll({ where: { user_id: req.user?.id } });
    const msg = req.flash("success");
    res.render("home/index", { msg, links });
  },
  handleShortUrl: async (req, res) => {
    const { originalUrl } = req.body;
    const shortUrl = `http://127.0.0.1:3000/home/clicked/${uid(6)}`;
    console.log(shortUrl);
    // const user = await User.findOne({
    //   where: { id: req.user.id },
    //   include: { model: Link },
    // });
    // const { Links: link } = user;
    const link = await Link.create({
      originalUrl: originalUrl,
      shortUrl: shortUrl,
      clicks: 0,
      user_id: req.user.id,
    });
    req.flash("success", "Success");
    res.redirect("/home");
  },
  click: async (req, res) => {
    const shortUrl = req.params.shortUrl;
    console.log(`click kia1111111111111111111111111111111111111`);
    const link = await Link.findOne({
      where: {
        shortUrl: `http://127.0.0.1:3000/home/clicked/${shortUrl}`,
      },
    });
    console.log(link);
    if (!link) {
      res.send("Khong ton tai link");
    }
    const clicked = link.clicks + 1;
    console.log(clicked);
    await link.update({ clicks: clicked });
    res.redirect(link.originalUrl);
  },
};
