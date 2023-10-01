const AuthController = require("../controllers/AuthController");

var express = require("express");
var router = express.Router();

router.get("/login", AuthController.index);
router.get("/logout", AuthController.logout);
router.post("/login", AuthController.handeLogin);

module.exports = router;
