const fs = require("fs");
const path = require("path");
const filePath = path.resolve(__dirname, "08.txt");

const ws = fs.createWriteStream(filePath);

// ws.end();
ws.close();

ws.on("open", () => {
  console.log("打开文件了");
});

ws.on("close", () => {
  ws.write("33");
  console.log("关闭文件了");
});
