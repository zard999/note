const fs = require("fs");
const path = require("path");
// 引入promisify
const { promisify } = require("util");

const filePath = path.resolve(__dirname, "05.txt");

// 经过promisify处理
const open = promisify(fs.open);
const write = promisify(fs.write);
const close = promisify(fs.close);

(async function () {
  const fd = await open(filePath, "a", (err) => {
    if (err) {
      console.log("err", err);
      return;
    }
    console.log("文件打开成功");
  });
  await write(fd, "hhh");
  await close(fd);
})();
