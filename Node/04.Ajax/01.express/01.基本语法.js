const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  console.log(req.query);
  //   res.end("hhh");
  //   res.send("还问我");
});

app.get("/download", (req, res) => {
  const filePath = path.resolve(__dirname, "01.txt");
  res.download(filePath);
});

app.get("/dd", (req, res) => {
  const filePath = path.resolve(__dirname, "01.html");
  res.sendFile(filePath);
});

app.get("/atguigu", (req, res) => {
  res.redirect("http://www.atguigu.com");
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("服务器已启动 http://127.0.0.1:3000");
});
