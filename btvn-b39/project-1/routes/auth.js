var express = require("express");
var router = express.Router();
const passport = require("passport");
const AuthController = require("../controllers/AuthController");
/* GET home page. */
const isLogin = (req, res, next) => {
  if (req.user) {
    res.redirect("/");
  }
  next();
};
router.get("/login", isLogin, function (req, res, next) {
  const msg = req.flash("error");
  res.render("auth/login", { msg: msg });
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/auth/login",
    failureFlash: true,
  }),
  AuthController.handleLogin
);
router.get("/logout", AuthController.logout);
module.exports = router;
