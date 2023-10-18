var express = require("express");
var router = express.Router();
const AuthController = require("../controller/AuthController");
const passport = require("passport");

const isLogin = (req, res, next) => {
  if (req.user) {
    res.redirect("/home");
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

module.exports = router;
