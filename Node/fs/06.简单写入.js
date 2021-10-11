const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "06.txt");

fs.writeFile(filePath, "hhh", { flag: "a" }, (err) => {
  if (err) {
    console.log("err", err);
    return;
  }
  console.log("写入成功");
});
