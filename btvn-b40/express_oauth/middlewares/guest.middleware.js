module.exports = (req, res, next) => {
  console.log(`guest middleware9999999`);
  if (req.user) {
    res.redirect("/");
  }
  next();
};
