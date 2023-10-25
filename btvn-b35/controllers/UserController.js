const { Op } = require("sequelize");
const Model = require("../models/index");
const User = Model.User;
const bcrypt = require("bcrypt");
const saltRounds = 10;
const validateEmail = function (email) {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
module.exports = {
  index: async (req, res) => {
    const {
      query,
      order = "asc",
      sort = "createdAt",
      limit,
      page = 1,
    } = req.query;
    console.log(req.query);
    const options = {
      attributes: ["id", "name", "email", "createdAt", "updatedAt"],
      order: [[sort, order]],
    };
    if (query) {
      options.where = {
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${query}%`,
            },
          },
          {
            email: {
              [Op.like]: `%${query}%`,
            },
          },
        ],
      };
    }
    if (limit && Number.isInteger(+limit)) {
      options.limit = +limit;
      //   tinh offset
      const offset = (page - 1) * limit;
      options.offset = offset;
    }
    const { rows: users, count } = await User.findAndCountAll(options);
    const response = {
      status: "success",
      data: users,
      count,
    };
    res.json(response);
  },
  view: async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({
        status: "error",
        error: "not found",
      });
      return;
    }
    res.json({
      status: "success",
      data: user,
    });
  },
  store: async function (req, res) {
    const { name, email } = req.body;
    const errors = {};
    console.log(16515115651);
    console.log(name, email);
    if (!name) {
      errors.name = "ten bat buoc phai nhap";
    }
    if (!email) {
      errors.email = " email bat buoc phai nhap";
    } else if (!validateEmail(email)) {
      errors.email = "email khong hop le";
    } else {
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (user) {
        errors.email = "email da ton tai";
      }
    }
    const response = {};
    if (Object.keys(errors).length) {
      Object.assign(response, {
        status: "error",
        errorText: "Validatioin",
        errors,
      });
      res.status(400).json(response);
      return;
    }
    User.create({ name, email });
    res.json({});
  },
  put: async (req, res) => {
    const id = req.params.id;
    const errors = {};
    const response = {};

    const { name = null, email = null, password = null } = req.body;
    console.log(name, email, password);
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ status: "error", error: "not found" });
      }
      if (email !== null) {
        if (!validateEmail(email)) {
          errors.email = `email khong hop le`;
        }
      }
      if (Object.keys(errors).length) {
        console.log(458740);
        Object.assign(response, {
          status: `error`,
          errorText: `Validation`,
          errors,
        });
        return res.status(400).json(response);
      }
      if (password) {
        let passwordNew = bcrypt.hashSync(password, saltRounds);

        await user.update({
          name,
          email,
          password: passwordNew,
          updateAt: new Date(),
        });
        return res.json({ message: `Thanh Cong` });
      }
      await user.update({ name, email, password, updateAt: new Date() });
      res.json({ message: `Thanh Cong` });
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  patch: async (req, res) => {
    const id = req.params.id;
    const errors = {};
    const response = {};

    const { name, email, password } = req.body;
    console.log(name, email, password);
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ status: "error", error: "not found" });
      }
      if (email) {
        if (!validateEmail(email)) {
          errors.email = `email khong hop le`;
        }
      }
      if (Object.keys(errors).length) {
        console.log(458740);
        Object.assign(response, {
          status: `error`,
          errorText: `Validation`,
          errors,
        });
        return res.status(400).json(response);
      }
      if (password) {
        let passwordNew = bcrypt.hashSync(password, saltRounds);

        await user.update({
          name,
          email,
          password: passwordNew,
          updateAt: new Date(),
        });
        return res.json({ message: `Thanh Cong` });
      }
      await user.update({ name, email, password, updateAt: new Date() });
      res.json({ status: "success", message: `Thanh Cong` });
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  delete: async (req, res) => {
    const id = req.params.id;
    try {
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ status: "error", error: "not found" });
      }
      user.destroy();
      res.json({ status: "success", message: "Xoa thanh cong" });
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
