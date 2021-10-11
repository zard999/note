const fs = require("fs");
const path = require("path");
const filePath = path.resolve(__dirname, "08.txt");

const rs = fs.createReadStream(filePath);

rs.on("data", (chunk) => {
  console.log(chunk);
  console.log(chunk.toString());
});

rs.on("end", () => {
  console.log("关闭了");
});
