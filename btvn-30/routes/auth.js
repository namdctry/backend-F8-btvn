var express = require("express");
var router = express.Router();
const passport = require("passport");
const AuthController = require("../controller/AuthController");
/* GET users listing. */

const isLogin = (req, res, next) => {
  if (req.user) {
    res.redirect("/");
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
router.get("/register", isLogin, AuthController.register);
router.post("/register", AuthController.handleRegister);
router.get("/logout", AuthController.logout);
router.get("/forgetPw", AuthController.forgetPw);
router.post("/forgetPw", AuthController.handleForgetPw);
router.get("/reset-password/:token", AuthController.resetPw);
router.post("/reset-password/:token", AuthController.handleResetPw);
module.exports = router;
