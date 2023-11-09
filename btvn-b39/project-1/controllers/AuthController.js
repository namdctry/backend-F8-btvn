module.exports = {
  handleLogin: async (req, res) => {
    req.session.isAuthenticated = true;

    console.log(req.user);
    // res.redirect("/");
    res.redirect("http://127.0.0.1:3002");
  },
  logout: async (req, res) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/auth/login");
    });
  },
};
