const fs = require("fs");
const path = require("path");
const filePath = path.resolve(__dirname, "04.txt");

function open(filePath) {
  return new Promise((resolve, reject) => {
    fs.open(filePath, "a", (err, fd) => {
      if (err) {
        return reject(err);
      }
      console.log("文件打开成功");
      resolve(fd);
    });
  });
}

function write(fd, content) {
  return new Promise((resolve, reject) => {
    fs.write(fd, content, (err) => {
      if (err) {
        return reject(err);
      }
      console.log("文件写入成功");
      resolve();
    });
  });
}

function close(fd) {
  return new Promise((resolve, reject) => {
    fs.close(fd, (err) => {
      if (err) {
        return reject(err);
      }
      console.log("文件关闭成功");
      resolve();
    });
  });
}

(async function () {
  const fd = await open(filePath);

  await write(fd, "hhh");
  await close(fd);
})();
