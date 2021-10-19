const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  const filePath = path.resolve(__dirname, "02.second层封装.html");
  res.sendFile(filePath);
});

// 处理post请求的body
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

// get请求
app.get("/login", (req, res) => {
  const query = req.query;
  console.log(query);
  if (query.user === "zhangsan" && query.pass === "12345") {
    return res.json({
      code: 10000001,
      msg: "登陆成功",
    });
  }

  res.json({
    code: 10000000,
    msg: "登陆失败",
  });
});

// post请求
app.post("/login", (req, res) => {
  const body = req.body;
  console.log(body);
  if (body.user === "zhangsan" && body.pass === "12345") {
    return res.json({
      code: 10000001,
      msg: "登陆成功",
    });
  }

  res.json({
    code: 10000000,
    msg: "登陆失败",
  });
});

// put请求
app.put("/login", (req, res) => {
  const body = req.body;
  console.log(body);
  if (body.user === "zhangsan" && body.pass === "12345") {
    return res.json({
      code: 10000001,
      msg: "登陆成功",
    });
  }

  res.json({
    code: 10000000,
    msg: "登陆失败",
  });
});

// delete请求
app.delete("/login", (req, res) => {
  const query = req.query;
  console.log(query);
  if (query.user === "zhangsan" && query.pass === "12345") {
    return res.json({
      code: 10000001,
      msg: "登陆成功",
    });
  }

  res.json({
    code: 10000000,
    msg: "登陆失败",
  });
});

app.listen("4000", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("服务器已开启 http://127.0.0.1:4000");
});
