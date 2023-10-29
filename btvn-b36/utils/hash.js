const bcrypt = require("bcrypt");
const saltRounds = 10;
module.exports = {
  make: (password) => {
    const hash = bcrypt.hashSync(password, saltRounds);
    return hash;
  },
  check: (myPlaintextPassword, hash) => {
    const check = bcrypt.compareSync(myPlaintextPassword, hash);
    return check;
  },
};
