const express = require("express");
const path = require("path");

const app = express();

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  const filePath = path.resolve(__dirname, "03.put请求.html");
  res.sendFile(filePath);
});

// get
app.get("/login", (req, res) => {
  const query = req.query;
  console.log(query);
  if (query.user === "zhangsan" && query.pass === "123456") {
    return res.json({
      code: 100000001,
      msg: "成功登陆",
    });
  }
  res.json({
    code: 100000000,
    msg: "登陆失败",
  });
});

// post
app.post("/login", (req, res) => {
  const body = req.body;
  console.log(body);
  if (body.user === "zhangsan" && body.pass === "123456") {
    return res.json({
      code: 100000001,
      msg: "成功登陆",
    });
  }
  res.json({
    code: 100000000,
    msg: "登陆失败",
  });
});

// put
app.put("/login", (req, res) => {
  const body = req.body;
  console.log(body);
  if (body.user === "zhangsan" && body.pass === "123456") {
    return res.json({
      code: 100000001,
      msg: "成功登陆",
    });
  }
  res.json({
    code: 100000000,
    msg: "登陆失败",
  });
});

app.listen("4000", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("服务器已开启 http://127.0.0.1:4000");
});
