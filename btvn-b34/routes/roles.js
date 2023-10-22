var express = require("express");
var router = express.Router();

const RoleController = require("../controllers/RoleController");
const PermissionMiddleware = require("../middlewares/PermissionMiddleware");

router.get("/", PermissionMiddleware("users.read"), RoleController.index);
router.get("/add", PermissionMiddleware("users.add"), RoleController.add);
router.post("/add", RoleController.handleAdd);

router.get(
  "/edit/:id",
  PermissionMiddleware("users.update"),
  RoleController.edit
);
router.post("/edit/:id", RoleController.handleEdit);

router.post(
  "/delete/:id",
  PermissionMiddleware("users.delete"),
  RoleController.delete
);

module.exports = router;
