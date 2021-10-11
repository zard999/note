const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "03.txt");
(async function () {
  const fd = await new Promise((resolve, reject) => {
    fs.open(filePath, "a", (err, fd) => {
      if (err) {
        return reject(err);
      }
      console.log("文件打开成功");
      resolve(fd);
    });
  });

  await new Promise((resolve, reject) => {
    fs.write(fd, "hhh", (err) => {
      if (err) {
        return reject(err);
      }
      console.log("文件写入成功");
      resolve();
    });
  });

  await new Promise((resolve, reject) => {
    fs.close(fd, (err) => {
      if (err) {
        return reject(err);
      }
      console.log("文件关闭成功");
      resolve();
    });
  });
})();
