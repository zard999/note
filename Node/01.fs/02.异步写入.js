const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "02.txt");

fs.open(filePath, "a", (err, fd) => {
  if (err) {
    console.log("文件打开失败", err);
    return;
  }
  console.log("文件打开成功");

  fs.write(fd, "hhh", (err) => {
    if (err) {
      console.log("err", err);
      return;
    }
    console.log("文件写入成功");

    fs.close(fd, (err) => {
      if (err) {
        console.log("err", err);
        return;
      }
      console.log("文件关闭成功");
    });
  });
});
