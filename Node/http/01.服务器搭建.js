const http = require("http");
let count = 0;

const server = http.createServer((req, res) => {
  count++;
  res.setHeader("Content-Type", "text/palin;charset=utf-8");
  res.end(`您是第${count}位用户`);
});

server.listen(3000, "127.0.0.1", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("服务开启成功");
});
