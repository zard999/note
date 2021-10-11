const fs = require("fs");
const path = require("path");

const filePath1 = path.resolve(__dirname, "02.mp3");
const filePath2 = path.resolve(__dirname, "01.mp3");

const ws = fs.createWriteStream(filePath1);
const rs = fs.createReadStream(filePath2);

rs.on("data", (chunck) => {
  ws.write(chunck);
});
