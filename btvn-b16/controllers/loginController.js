const { Session } = require("session");

module.exports = {
  index: (req, res) => {
    const { email, password, body } = req.session;
    console.log(11111111111111);
    console.log(req.body);
    console.log(req.session);
    console.log(req.session.cookie.path);
    if (email === "admin@gmail.com" && password === "123456") {
      res.redirect("/");
    } else if (email === "" && password === "") {
      req.flash("title", "vui lòng nhập tài khoản mật khẩu");
      res.render("login/index", {
        title: req.flash("title"),
      });
    } else if (email === undefined && password === undefined) {
      req.flash("title", "");
      res.render("login/index", {
        title: req.flash("title"),
      });
    } else if (email !== "admin@gmail.com" || password !== "123456") {
      req.flash("title", "email hoặc mật khẩu sai");
      res.render("login/index", {
        title: req.flash("title"),
      });
    }
  },
  handleLogin: (req, res) => {
    const { email, password } = req.body;
    // console.log(req.body);

    req.session.email = email;
    req.session.password = password;
    console.log(email, password);
    res.redirect("/login");
  },
};
