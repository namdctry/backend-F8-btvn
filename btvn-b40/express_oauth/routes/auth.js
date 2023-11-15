var express = require("express");
var passport = require("passport");
var router = express.Router();
const authController = require("../controllers/auth.controller");
var guestMiddleware = require("../middlewares/guest.middleware");

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

router.get("/redirect", (req, res) => {
  const cookie = req.cookies["connect.sid"];
  console.log(22222);
  console.log(req.user.id);
  console.log(req.query.url);
  console.log(cookie);
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
