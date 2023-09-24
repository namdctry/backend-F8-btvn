const Customer = require("../models/Customer");
const Province = require("../models/Province");
const moment = require("moment");
const { Op } = require("sequelize");
const { PER_PAGE } = process.env;
const { getPaginateUrl } = require("../utils/url");
const { validationResult } = require("express-validator");
const validate = require("../utils/validate");
const md5 = require("md5");
module.exports = {
  index: async (req, res) => {
    const { keyword, status } = req.query;
    // console.log(req.query);
    const customer = await Customer;
    const filters = {};
    if (status === "active" || status === "inactive") {
      filters.status = status === "active" ? 1 : 0;
    }
    if (keyword) {
      filters[Op.or] = [
        {
          name: {
            [Op.like]: `%${keyword}%`,
          },
        },
        {
          email: {
            [Op.like]: `%${keyword}%`,
          },
        },
      ];
    }

    const totalCountObj = await customer.findAndCountAll({
      where: filters,
    });

    const totalCount = totalCountObj.count;

    const totalPage = Math.ceil(totalCount / PER_PAGE);

    let { page } = req.query;
    // console.log(req.query);
    if (page < 1 || page > totalPage || !page) {
      page = 1;
    }

    offset = (page - 1) * PER_PAGE;
    const customerList = await customer.findAll({
      // attributes: ["id", "name", "email", "status"],
      order: [["created_at", "DESC"]],
      where: filters,
      limit: +PER_PAGE,
      offset: offset,
    });
    const msg = req.flash("msg");
    res.render("customers/index", {
      customerList,
      moment,
      req,
      page,
      totalPage,
      getPaginateUrl,
      msg,
      totalCount,
    });
  },
  create: async (req, res) => {
    const province = await Province;
    const provinceList = await province.findAll();
    const msg = req.flash("msg");
    const errors = req.flash("errors");
    // console.log(validate.getError(errors, "name"));
    // console.log(errors);
    res.render("customers/create", { provinceList, msg, errors, validate });
  },

  // post create
  store: async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      // console.log("Khong co loi");
      const customer = await Customer;
      req.body.password = md5(req.body.password);
      customer.create(req.body);
      req.flash("msg", "them khach hang thanh cong");
      res.redirect("/customers");
    } else {
      req.flash("errors", errors.array());
      req.flash("msg", "vui long nhap day du thong tin");
      res.redirect("/customers/create");
    }
  },
  update: async (req, res) => {
    const { id } = req.query;
    // console.log(req.params.id);
    // console.log(id);
    const province = await Province;
    const provinceList = await province.findAll();
    const customerDb = await Customer;
    const customer = await customerDb.findByPk(id);
    const errors = req.flash("errors");
    const msg = req.flash("msg");
    res.render(`customers/update`, {
      msg,
      provinceList,
      customer,
      validate,
      errors,
    });
  },
  handleUpdate: async (req, res) => {
    const errors = validationResult(req);
    console.log(req);
    console.log(req.body);
    console.log(222222222222);
    const { id } = req.query;
    console.log(`log danh sach loi`);
    console.log(errors);
    console.log(errors.array());
    // console.log(req);
    if (errors.isEmpty()) {
      const { name, email, password, status, province_id } = req.body;
      const customerDb = await Customer;
      const customer = await customerDb.findByPk(id);
      req.body.password = md5(req.body.password);
      await customer.update(
        {
          name: name,
          email: email,
          password: password,
          status: status,
          province_id: province_id,
        },
        {
          where: {
            id: id,
          },
        }
      );
      await customer.save();
      req.flash("msg", `sua khach hang ${customer.name} thanh cong`);
      res.redirect(`/customers/update?id=${id}`);
    } else {
      req.flash("errors", errors.array());
      // console.log(req.body);
      req.flash("msg", "vui long nhap day du thong tin");
      res.redirect(`/customers/update?id=${id}`);
    }
  },
  handleDelete: async (req, res) => {
    const { id } = req.query;
    const customerDb = await Customer;
    const customer = await customerDb.findByPk(id);
    await customerDb.destroy({
      where: {
        id: id,
      },
    });
    req.flash("msg", `Xoa thanh cong khach hang ${customer.name}`);

    res.redirect("/customers");
  },
};
