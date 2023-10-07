var express = require("express");
var router = express.Router();

const isLogout = (req, res, next) => {
  console.log(req.user);
  if (!req.user) {
    res.redirect("/auth/login");
  }
  next();
};

router.get("/", isLogout, function (req, res, next) {
  req.user;
  res.render("index", { title: "Express" });
});

module.exports = router;
