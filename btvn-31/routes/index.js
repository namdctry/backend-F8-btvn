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
  // console.log(req.user);
  console.log(`dag log github ___________________________`);
  res.render("index", { title: "Express", user: req.user });
});

module.exports = router;
