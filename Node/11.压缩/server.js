const express = require("express");
const { resolve } = require("path");
const { exec } = require("child_process");
const fs = require("fs");
const zlib = require("zlib");

const app = express();

app.get("/", (req, res) => {
  const filePath = resolve(__dirname, "./index.html");

  const rs = fs.createReadStream(filePath);

  const acceptEncoding = req.headers["accept-encoding"];
  console.log(acceptEncoding);

  //   if (acceptEncoding.includes("gzip")) {
  //     const gzipFile = rs.pipe(zlib.createGzip());
  //     res.set("content-encoding", "gzip");
  //     return gzipFile.pipe(res);
  //   }

  if (acceptEncoding.includes("deflate")) {
    const deflateFile = rs.pipe(zlib.createDeflate());
    res.set("content-encoding", "deflate");
    return deflateFile.pipe(res);
  }
});

app.listen(4000, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("服务已启动 http://localhost:4000");
  exec("start http://localhost:4000");
});
