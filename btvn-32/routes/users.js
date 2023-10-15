var express = require("express");
var router = express.Router();
const UserController = require("../controller/UserController");
/* GET users listing. */
const isLogout = (req, res, next) => {
  console.log(777777777777777);
  if (!req.user) {
    console.log(8888888888888888888);
    res.redirect("/auth/login");
  }
  next();
};

router.get("/", isLogout, UserController.index);
router.get("/permission/:id", isLogout, UserController.permission);
router.post("/permission/:id", UserController.handlePermission);
router.get("/role", UserController.role);
router.get("/role/add", UserController.addRole);
router.post("/role/add", UserController.handleAddRole);

router.get("/role/edit/:id", UserController.editRole);

module.exports = router;
