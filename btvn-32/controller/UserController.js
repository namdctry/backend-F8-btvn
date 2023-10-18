const model = require("../models/index");
const User = model.User;
const Role = model.Role;
const Permission = model.Permission;
module.exports = {
  index: async (req, res) => {
    const users = await User.findAll();
    res.render("users/index", { users });
  },
  permission: (req, res) => {
    res.render("users/permission");
  },
  handlePermission: (req, res) => {
    const permission = req.body.permission;
    console.log(permission);
    console.log(111111111);
    res.send("handle permission:");
  },
  role: async (req, res) => {
    const role = await Role.findAll({
      include: { model: Permission },
    });
    console.log(role);

    res.render("users/role", { role });
  },
  addRole: async (req, res) => {
    const msg = req.flash("msg");
    res.render("users/addRole", { msg });
  },
  handleAddRole: async (req, res) => {
    const { name, permissions } = req.body;
    console.log(req.body);
    if (!name) {
      req.flash("msg", "Please enter a name");
      res.redirect("/users/role/add");
    } else {
      const newRole = await Role.create({ name: name });
      if (typeof permissions === "string") {
        console.log(1111111);
        await newRole.addPermission(
          await Permission.findOne({
            where: { value: permissions },
          })
        );

        req.flash("msg", "Success");
        res.redirect("/users/role/add");
        return;
      }
      for (const permissionValue of permissions) {
        const permission = await Permission.findOne({
          where: { value: permissionValue },
        });
        if (permission) {
          await newRole.addPermission(permission);
        }
      }
      req.flash("msg", "Success");
      res.redirect("/users/role/add");
    }
  },

  editRole: async (req, res) => {
    const msg = req.flash("msg");
    const id = req.params.id;
    const role = await Role.findByPk(id, { include: Permission });
    console.log(role);
    console.log(888);
    const roleName = role.name;
    console.log(roleName);
    let permissions = await role.Permissions;
    console.log(99);
    console.log(permissions);
    const permissionList = permissions.map((permission) => {
      return permission.dataValues.value;
    });
    res.render("users/editRole", { msg, permissionList, roleName });
  },
};
