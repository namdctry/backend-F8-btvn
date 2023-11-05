const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const model = require("../models/index");
const User = model.User;
module.exports = {
  index: async (req, res) => {
    if (req.cookies.usersCache) {
      console.log(2222222222222);
      const cachedData = await fs.readFileSync(
        `./cache/${req.cookies.usersCache}`
      );
      const users = JSON.parse(cachedData);
      res.json({
        status: "success",
        data: users,
      });
    } else {
      try {
        const users = await User.findAll();
        const id = uuidv4();
        console.log(11111);
        fs.writeFileSync(`./cache/${id}`, JSON.stringify(users));
        res.cookie("usersCache", id, { maxAge: 900000, httpOnly: true });
        res.json({
          status: "success",
          data: users,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: "error",
          message: "error server",
        });
      }
    }
  },
};
