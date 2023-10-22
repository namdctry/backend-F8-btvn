// const model = require("../models/index");
// const { hasPermission } = require("./permisson");

module.exports = {
  checkAction: (permissionList, permissionValue) => {
    return permissionList.some((permission) => permission === permissionValue);
  },
};
