var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const userRoute = require("./routes/user")
var cors = require("cors");

//database
const database = require("./config/database");
database();

app.use(express.json());

const { createUser, getAllUser, getUser, deleteUser, updateUser } = require("./controller/userController");

app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/user", userRoute);

app.get("/signUp", (req, res) => {
  res.render("signUp");
});

app.get("/login", (req, res) => {
  res.render("login");
});


app.post("/api/user", createUser);

app.get("/api/user", getAllUser);

app.get("/api/user/:id", getUser);

app.delete("/api/user/:id", deleteUser);

app.put("/api/user/:id", updateUser);


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
