module.exports = {
  index: (req, res) => {
    const { email, password } = req.session;
    if (email === "admin@gmail.com" && password === "123456") {
      res.redirect("/");
    } else if (email === "" && password === "") {
      req.flash("title", "vui lòng nhập tài khoản mật khẩu");
      res.render("login/index", {
        title: req.flash("title"),
      });
    } else if (email !== "admin@gmail.com" || password !== "123456") {
      req.flash("title", "email hoặc mật khẩu sai");
      res.render("login/index", {
        title: req.flash("title"),
      });
    } else if (email === undefined && password === undefined) {
    }
  },
  handleLogin: (req, res) => {
    const { email, password } = req.body;
    s;
    console.log(req.body);

    req.session.email = email;
    req.session.password = password;
    console.log(email, password);
    return res.redirect("/login");
  },
};
