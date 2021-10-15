const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/user");

mongoose.connection.once("open", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("数据库已启动");
});
