var express = require("express");
var router = express.Router();
const signUpController = require("../controllers/SignUpController");
/* GET home page. */
router.get("/", signUpController.index);
router.post("/", signUpController.handleSignUp);
module.exports = router;
