const model = require("../models/index");
const User = model.User;
const jwt = require("jsonwebtoken");
const hashUtils = require("../utils/hash");
module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      res.status(400).json({
        status: "error",
        message: "Authentication Failed",
      });
      return;
    }
    const { password: hash } = user;

    const status = hashUtils.check(password, hash);
    if (!status) {
      res.status(400).json({
        status: "error",
        message: "Authentication Failed",
      });
      return;
    }

    const { JWT_SECRET, JWT_EXPIRE } = process.env;
    const token = jwt.sign(
      {
        data: {
          userId: user.id,
        },
      },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRE * 60 }
    );

    res.json({
      status: "success",
      accessToken: token,
    });
  },
};
