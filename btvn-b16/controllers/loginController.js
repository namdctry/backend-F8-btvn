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
      res.render("login/index", {
        title: "email hoặc mật khẩu sai",
      });
    }
  },
  handleLogin: (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    console.log(email, password);

    req.session.email = email;
    req.session.password = password;
    return res.redirect("/login");
  },
};
