var express = require("express");
var router = express.Router();
const HomeController = require("../controllers/HomeController");
const signUpController = require("../controllers/SignUpController");
/* GET home page. */
router.get("/", HomeController.index);
module.exports = router;
