const express = require("express");
const { exec } = require("child_process");
const { resolve } = require("path");

const app = express();

app.use("/src/", express.static(resolve(__dirname, "./src")));
app.use("/", (req, res) => {
  const filePath = resolve(__dirname, "./index.html");
  res.sendFile(filePath);
});
app.listen(4000, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("服务已开启 http://localhost:4000");
  exec("start http://localhost:4000");
});
