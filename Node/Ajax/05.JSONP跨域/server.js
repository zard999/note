const express = require("express");

const app = express();

// get请求
app.get("/login", (req, res) => {
  const query = req.query;
  console.log(query);
  if (query.user === "zhangsan" && query.pass === "12345") {
    const data = {
      code: 10000001,
      msg: "登陆成功",
    };
    return res.send(`${query.callback}(${JSON.stringify(data)})`);
  }
  const data = {
    code: 10000000,
    msg: "登陆失败",
  };
  res.send(`${query.callback}(${JSON.stringify(data)})`);
});

app.listen("4000", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("服务器已开启 http://127.0.0.1:4000");
});
