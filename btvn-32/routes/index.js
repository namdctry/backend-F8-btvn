var express = require("express");
var router = express.Router();

/* GET home page. */
const isLogout = (req, res, next) => {
  if (!req.user) {
    res.redirect("/auth/login");
  }
  next();
};
router.get("/", isLogout, function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
