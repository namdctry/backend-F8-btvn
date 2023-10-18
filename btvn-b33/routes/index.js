var express = require("express");
var router = express.Router();
const HomeController = require("../controller/HomeController");
/* GET home page. */

const isLogout = (req, res, next) => {
  if (!req.user) {
    res.redirect("/auth/login");
  }
  next();
};
router.get("/", function (req, res, next) {
  console.log(608046060);
  res.render("index", { title: "Express" });
});
router.get("/home", isLogout, HomeController.index);
router.post("/home", HomeController.handleShortUrl);
router.get("/home/clicked/:shortUrl", HomeController.click);
module.exports = router;
