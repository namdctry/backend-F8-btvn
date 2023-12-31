// var createError = require("http-errors");
// var express = require("express");
// var path = require("path");
// var cookieParser = require("cookie-parser");
// var logger = require("morgan");
// const expressLayouts = require("express-ejs-layouts");
// const session = require("express-session");
// const passport = require("passport");
// const model = require("./models/index");

// var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");
// const authRouter = require("./routes/auth");

// const localPassport = require("./passport/localPassport");

// var app = express();

// // view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");
// app.use(expressLayouts);

// app.use(
//   session({
//     secret: "baitap32",
//     resave: true,
//     saveUninitialized: true,
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());

// passport.serializeUser(function (user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(async function (id, done) {
//   // model.User.findById(id, function (err, user) {
//   //   done(err, user);
//   // });

//   const user = await model.User.findByPk(id);
//   done(null, user);
// });

// app.use("local", localPassport);

// app.use(flash());

// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
// app.use("/users", usersRouter);
// app.use("/auth", authRouter);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

// module.exports = app;

require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const session = require("express-session");
var flash = require("connect-flash");
const passport = require("passport");
const model = require("./models/index");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");

const localPassport = require("./passport/localPassport");
var expressLayouts = require("express-ejs-layouts");
var app = express();

app.use(
  session({
    secret: "f8",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  const user = await model.User.findByPk(id);
  done(null, user);
});
passport.use("local", localPassport);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressLayouts);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/auth", authRouter);
app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
