var express = require("express");
var router = express.Router();
const AuthController = require("../controllers/AuthController");

router.post("/login", AuthController.login);
router.get("/profile", AuthController.profile);
router.get("/logout", AuthController.logout);
router.post("/send-mail", AuthController.sendMail);
router.post("/refresh-token", AuthController.refreshToken);

module.exports = router;
