module.exports = (req, res, next) => {
  const { userLogin } = req.session;
  if (userLogin) {
    console.log(222222222223);
    console.log(userLogin);
    res.redirect("/customers");
  }
  next();
};
