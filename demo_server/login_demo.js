const User = require("../server/models/user");
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://168.138.40.98/maill")
  .then(() => {
    console.log("success");
  })
  .catch((err) => {
    console.log(err, "fail");
  });

User.findOne({ username: "admin", password: "123456" }).then((res) => {
  console.log(res);
});
