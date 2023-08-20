var express = require("express");
var router = express.Router();
const HomeController = require("../controllers/HomeController");
const AboutController = require("../controllers/AboutController");
const GalleryController = require("../controllers/GalleryController");
const ContactController = require("../controllers/ContactController");
const ServicesController = require("../controllers/ServicesController");
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get("/index", HomeController.index);
router.get("/about", AboutController.index);
router.get("/gallery", GalleryController.index);
router.get("/contact", ContactController.index);
router.get("/services", ServicesController.index);
module.exports = router;
