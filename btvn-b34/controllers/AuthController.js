module.exports = {
  login: async (req, res) => {
    res.render("auth/login", { layout: "layouts/auth_layout" });
  },
  logout: (req, res) => {
    req.logout(function (error) {
      if (error) {
        return next(error);
      }
      res.redirect("/auth/login");
    });
  },
};
