const bcrypt = require("bcrypt");
const saltRounds = 10;
module.exports = {
  make: (password) => {
    const hash = bcrypt.hashSync(password, saltRounds);
    return hash;
  },
  check: (hash, password) => {
    const check = bcrypt.compareSync(hash, password);
    return check;
  },
};
