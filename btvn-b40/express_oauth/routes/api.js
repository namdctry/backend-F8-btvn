var express = require("express");
var router = express.Router();

router.post("/auth/status", (req, res) => {
  console.log(999999);
  console.log(`route api`);
  if (req.user) {
    res.json({
      status: "success",
      user: req.user,
    });
    return;
  }
  res.status(401).json({
    status: "error",
    message: "Unauthorize",
  });
});

router.get("/auth/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      next();
    }
    if (req.query.redirect) {
      console.log(`log out api`);
      res.redirect(req.query.redirect);
      return;
    }
    res.redirect("/");
  });
});

module.exports = router;
