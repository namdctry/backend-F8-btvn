module.exports = (req, res, next) => {
  if (req.user) {
    console.log(555555555555);
    console.log(req.user);
    res.redirect("/");
  }

  next();
};
