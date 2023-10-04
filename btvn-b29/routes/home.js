var express = require("express");
var router = express.Router();
const homeController = require("../controller/homeController");
/* GET home page. */
router.get("/", homeController.index);
router.post("/", homeController.handleSend);
router.get("/track/this/image/:param", homeController.sendTrack);

module.exports = router;
