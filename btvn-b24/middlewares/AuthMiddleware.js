module.exports = (req, res, next) => {
  const { userLogin } = req.session;
  if (!userLogin) {
    console.log(`khong co session`);
    res.redirect("/auth/login");
  }
  next();
};
