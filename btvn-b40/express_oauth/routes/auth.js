var express = require("express");
var passport = require("passport");
var router = express.Router();
const authController = require("../controllers/auth.controller");
var guestMiddleware = require("../middlewares/guest.middleware");
var authMiddleware = require("../middlewares/auth.middleware");
router.get("/login", guestMiddleware, authController.login);
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/auth/login",
    // failureFlash: true,
    // successRedirect: "/",
  }),
  authController.handleLogin
);
router.get("/2fa", authMiddleware, authController.twoFA);
router.post("/2fa", authController.handleTwoFA);
router.get("/redirect", (req, res) => {
  console.log(`REDIRECT`);
  const cookie = req.cookies["connect.sid"];
  res.redirect(req.query.url + "?cookie=" + cookie);
});

router.post("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      next();
    }
    res.redirect("/auth/login");
  });
});

module.exports = router;
