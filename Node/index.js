const srever = require("./server");
const router = require("./router");
srever.start(router.route);
