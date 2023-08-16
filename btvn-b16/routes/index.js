var express = require("express");
var router = express.Router();

const loginController = require("../controllers/loginController");
const homeController = require("../controllers/homeController");
/* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });
router.get("/", homeController.index);
router.post("/", homeController.handleLogOut);
router.get("/login", loginController.index);
router.post("/login", loginController.handleLogin);

module.exports = router;
