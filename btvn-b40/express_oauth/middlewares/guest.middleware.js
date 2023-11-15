module.exports = (req, res, next) => {
  console.log(`guest middleware 9999999`);
  if (req.user) {
    res.redirect("/");
  }
  next();
};
