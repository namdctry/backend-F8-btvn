const { LoginToken } = require("../models/index");
module.exports = async (req, res, next) => {
  if (!req.user) {
    return res.redirect("/auth/login");
  } else {
    const loginToken = await LoginToken.findOne({
      where: {
        user_id: req.user.id,
      },
    });

    if (req.cookies.loginToken === loginToken.token) {
      next();
    } else {
      req.logout((err) => {
        if (err) {
          next();
        }
        res.redirect("/auth/login");
      });
    }
  }
};
