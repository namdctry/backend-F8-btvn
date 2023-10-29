const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const token = req.header("Authorization");
  const { JWT_SECRET } = process.env;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Forbidden" });
    req.user = user;
    next();
  });
};
