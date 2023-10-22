const model = require("../models/index");
const { User, Role, Permission } = model;
module.exports = {
  get: (data, permission) => {
    const permissionData = data.find(({ value }) => value === permission);
    console.log(65496080468);
    if (permissionData) {
      return permissionData.value;
    }
  },

  isRole: (roleData, roleId) => {
    return roleData.find((role) => {
      return +role.id === +roleId;
    });
  },
  hasPermission: async (req) => {
    console.log(req);
    console.log(req.user);
    const { id } = req.user;

    const user = await User.findOne({
      where: {
        id,
      },
      include: {
        model: Role,
      },
    });

    const roles = user.Roles;

    //Lấy tất cả permission của từng Role
    let permissions = await Promise.all(
      roles.map(async ({ id }) => {
        const role = await Role.findOne({
          where: { id },
          include: {
            model: Permission,
          },
        });

        return role.Permissions;
      })
    );
    permissions = permissions.map((item) => {
      return item.map(({ value }) => value);
    });

    permissions = [...new Set(permissions.flat(Infinity))];
    return permissions;
  },
};
