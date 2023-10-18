module.exports = {
  login: (req, res) => {
    const msg = req.flash("error");
    res.render("auth/login", { msg });
  },
  handleLogin: (req, res) => {
    res.redirect("/home");
  },
};
