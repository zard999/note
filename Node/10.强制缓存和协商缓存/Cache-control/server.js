const express = require("express");
const { resolve } = require("path");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
  const filePath = resolve(__dirname, "./index.html");
  const rs = fs.createReadStream(filePath);
  rs.pipe(res);
});

app.get("/img", (req, res) => {
  const filePath = resolve(__dirname, "./01.jpg");
  const rs = fs.createReadStream(filePath);
  res.set("Cache-Control", "max-age=1000");
  rs.pipe(res);
});

app.listen(4000, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("服务器已开启 http://localhost:4000");
});
