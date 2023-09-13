// const { Session } = require("session");
const crypto = require("crypto-js");
const Customer = require("../models/Login");
function encryptPassword(password) {
  return crypto.MD5(password).toString();
}
module.exports = {
  index: async (req, res) => {
    const { email, password } = req.session;
    const customer = await Customer;

    const customerList = await customer.findAll();
    const emails = [];
    const passwords = [];
    customerList.forEach((customer) => {
      const { email: emailCustomer, password: passwordCustomer } =
        customer.dataValues;
      emails.push(emailCustomer);
      passwords.push(passwordCustomer);
    });
    console.log(emails, passwords);
    if (email === "" && password === "") {
      req.flash("title", "vui lòng nhập tài khoản mật khẩu");
      res.render("login/index", {
        title: req.flash("title"),
      });
    } else if (email === undefined && password === undefined) {
      req.flash("title", "");
      res.render("login/index", {
        title: req.flash("title"),
      });
    }

    let isFound = false;
    let isPasswordMatch = false;
    for (let i = 0; i < emails.length; i++) {
      if (email === emails[i]) {
        if (encryptPassword(password) === passwords[i]) {
          isFound = true;
          res.redirect("/");
          break;
        } else {
          isPasswordMatch = true;
        }
      }
    }
    if (!isFound) {
      if (isPasswordMatch) {
        req.flash("title", "Mật khẩu sai!");
      } else {
        req.flash("title", "Không tồn tại tài khoản này");
      }
      res.render("login/index", { title: req.flash("title") });
    }
  },
  handleLogin: (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);

    req.session.email = email;
    req.session.password = password;
    console.log(email, password);
    res.redirect("/login");
  },
};
