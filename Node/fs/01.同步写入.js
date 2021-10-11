const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "01.txt");

const fd = fs.openSync(filePath, "a");

fs.writeSync(fd, "hhh");

fs.closeSync(fd);
