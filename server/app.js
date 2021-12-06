const express = require("express");
const path = require("path");
// var favicon = require('serve-favicon');
// var logger = require('morgan');
var cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
// var ejs = require('ejs')
// const index = require("./routes/index");
// const users = require("./routes/users");
const cors = require("cors");
const users = require("./routers/users");
const goods = require("./routers/goods");

const app = express();
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// app.use("/", index);
app.use("/users", users);
app.use("/goods", goods);

app.listen(3300, (req, res) => {
  console.log("server running");
});

//module.exports = app;
