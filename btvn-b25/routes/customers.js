var express = require("express");
var router = express.Router();

const CustomerValidate = require("../middlewares/CustomerValidate");
const CustomerController = require("../controllers/CustomerController");

/* GET users listing. */
router.get("/", CustomerController.index);
router.get("/create", CustomerController.create);
router.post("/create", CustomerValidate(), CustomerController.store);
router.get("/update", CustomerController.update);
router.post("/update", CustomerValidate(), CustomerController.handleUpdate);
router.get("/delete", CustomerController.handleDelete);

module.exports = router;
