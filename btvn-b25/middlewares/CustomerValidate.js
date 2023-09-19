const { check } = require("express-validator");
const Customer = require("../models/Customer");
module.exports = () => {
  return [
    check("name", "Phai nhap ten").notEmpty(),
    check("name", "Phai 5 ky tu tro len").isLength({ min: 5 }),
    check("email", "Email bat buoc phai nhap").isEmail(),
    check("email", "Email khong dung dinh dang").isEmail(),
    check("password", "Mat khau bat buoc phai nhap").notEmpty(),
    check("password", "Mat khau yeu").isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    }),
    check("email").custom(async (emailVal) => {
      const customer = await Customer;
      const customerData = await customer.findOne({
        where: { email: emailVal },
      });
      if (customerData) {
        // console.log(111111111);
        throw new Error("email da co nguoi dung");
      }
    }),

    check("status", "Phai nhap trang thai").notEmpty(),
    check("province_id", "Phai nhap dia chi").notEmpty(),
  ];
};
