var express = require("express");
var router = express.Router();
const AuthController = require("../controller/AuthController");
const passport = require("passport");

const isLogin = (req, res, next) => {
  if (req.user) {
    res.redirect("/users");
  }
  next();
};

router.get("/login", isLogin, AuthController.login);
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
