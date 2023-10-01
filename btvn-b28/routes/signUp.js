const signUpController = require("../controllers/SignUpController");

var express = require("express");
var router = express.Router();

router.get("/", signUpController.index);
router.post("/", signUpController.handleSignUp);
router.get("/active/:token", signUpController.handleActive);

module.exports = router;
