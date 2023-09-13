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
    const names = [];
    customerList.forEach((customer) => {
      const {
        email: emailCustomer,
        password: passwordCustomer,
        name: nameCustomer,
      } = customer.dataValues;
      emails.push(emailCustomer);
      passwords.push(passwordCustomer);
      names.push(nameCustomer);
    });
    let isFound = false;
    for (let i = 0; i < emails.length; i++) {
      if (email === emails[i]) {
        if (encryptPassword(password) === passwords[i]) {
          isFound = true;
          forename = names[i];
        }
      }
    }
    if (isFound) {
      res.render("index", { title: `${forename}` });
    } else {
      res.redirect("/login");
    }
  },
  handleLogOut: (req, res) => {
    const { email, password } = req.session;
    delete req.session.email;
    delete req.session.password;
    res.redirect("/login");
  },
};
