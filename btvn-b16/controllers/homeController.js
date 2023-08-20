module.exports = {
  index: (req, res) => {
    const { email, password } = req.session;
    if (email === "admin@gmail.com" && password === "123456") {
      res.render("index", { title: `${email}` });
    } else {
      res.redirect("/login");
    }
  },
  handleLogOut: (req, res) => {
    const { email, password } = req.session;
    // console.log(email, password);
    delete req.session.email;
    delete req.session.password;
    req.flash("title", `Đăng xuất thành công`);
    res.render("login/index", { title: req.flash("title") });
  },
};
