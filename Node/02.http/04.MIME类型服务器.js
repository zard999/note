const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const filePath = path.resolve(__dirname, "01.mp3");
  res.setHeader("Content-Type", "audio/mp3");
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.end(data);
  });
});

server.listen(3001, "localhost", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("服务器已开启");
});
