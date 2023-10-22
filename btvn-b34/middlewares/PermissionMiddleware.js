const model = require("../models/index");
// const User = model.User;
// const Role = model.Role;
// const Permission = model.Permission;
const { hasPermission: permissionList } = require("../utils/permisson");
module.exports = (permission) => {
  return async (req, res, next) => {
    if (req.user) {
      let permissions = await permissionList(req);
      const hasPermission = permissions.some(
        (permissionItem) => permissionItem === permission
      );
      console.log(hasPermission);
      if (hasPermission) {
        next();
      } else {
        res.send("Not permissions");
      }
    } else {
      res.send("Not found");
    }
  };
};
