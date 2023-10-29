var express = require("express");
var router = express.Router();

const UploadController = require("../controller/UploadController");
const authenticateToken = require("../middlewares/authenticateToken");

const multer = require("multer");
const path = require("path");
// File upload configuration
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
/* GET users listing. */
router.post(
  "/upload",
  authenticateToken,
  upload.single("file"),
  UploadController.upload
);

module.exports = router;
