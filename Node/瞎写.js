// const dataA = new Promise((resolve, reject) => {
//   console.log("开始请求数据A");
//   try {
//     // throw new Error("error: A报错");
//     setTimeout(() => {
//       console.log("A数据请求成功");
//       const data = {
//         name: "张三",
//       };
//       resolve(data);
//     }, 2000);
//   } catch (e) {
//     reject(e);
//   }
// });

// const dataB = new Promise((resolve, reject) => {
//   console.log("B数据开始请求");
//   try {
//     // throw new Error('error: B错误');
//     setTimeout(() => {
//       console.log("B数据请求成功");
//       const data = {
//         age: "18",
//       };
//       resolve(Object.assign({}, data, dataA));
//     }, 1000);
//   } catch (e) {
//     reject(e);
//   }
// });

// const dataC = new Promise((resolve, reject) => {
//   console.log("C数据开始请求");
//   try {
//     // throw new Error('error: C错误');
//     setTimeout(() => {
//       console.log("C数据请求成功");
//       const data = {
//         sex: "男",
//       };
//       resolve(Object.assign({}, data, dataB));
//     }, 3000);
//   } catch (e) {
//     reject(e);
//   }
// });

// dataB.then((value) => {
//   console.log(value);
// });

// async function getData() {
//   const dataA = await new Promise((resolve, reject) => {
//     console.log("A开始请求");
//     try {
//       //   throw new Error("error");
//       setTimeout(() => {
//         console.log("A数据请求成功");
//         const data = {
//           name: "张三",
//         };
//         resolve(data);
//       }, 2000);
//     } catch (e) {
//       reject(e);
//     }
//   });

//   const dataB = await new Promise((resolve, reject) => {
//     console.log("B开始请求");
//     try {
//       //   throw new Error("error");
//       setTimeout(() => {
//         console.log("B数据请求成功");
//         const data = {
//           age: 18,
//         };
//         resolve(Object.assign({}, data, dataA));
//       }, 1000);
//     } catch (e) {
//       reject(e);
//     }
//   });

//   return await new Promise((resolve, reject) => {
//     console.log("C开始请求");
//     try {
//       //   throw new Error("error");
//       setTimeout(() => {
//         console.log("C数据请求成功");
//         const data = {
//           sex: "男",
//         };
//         resolve(Object.assign({}, data, dataB));
//       }, 1500);
//     } catch (e) {
//       reject(e);
//     }
//   });
// }

// const re = getData();
// re.then((value) => {
//   console.log(value);
// });

// const promise1 = new Promise((resolve, reject) => {
//   console.log("promise1");
// });
// console.log("1", promise1);

// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   console.log(2);
// });
// promise.then(() => {
//   console.log(3);
// });

// const promise1 = new Promise((resolve, reject) => {
//   console.log("promise1");
//   resolve("resolve1");
// });
// const promise2 = promise1.then((res) => {
//   console.log(res);
// });
// console.log("1", promise1);
// console.log("2", promise2);

// 0 1 4
// Promise.resolve()
//   .then(() => {
//     console.log(0);
//     return Promise.resolve(4); //原生JS产生了两次微任务处理return Promise。resolve(4)??
//   })
//   .then((res) => {
//     console.log(res);
//   });

// Promise.resolve()
//   .then(() => {
//     console.log(1);
//   })
//   .then(() => {
//     console.log(2);
//   })
//   .then(() => {
//     console.log(3);
//   })
//   .then(() => {
//     console.log(5);
//   })
//   .then(() => {
//     console.log(6);
//   });

// 内建模块直接引⼊入
// const os = require("os");
// const mem = (os.freemem() / os.totalmem()) * 100;
// console.log(`内存剩余${mem.toFixed(2)}%`);

// 111 444 8 5 2 6 3 9 (14582639)

// setTimeout(() => {
//   //定1
//   console.log(222);
// }, 0);
// setImmediate(() => {
//   console.log(333); //立1
// });

// const promise = Promise.resolve();

// promise
//   .then(() => {
//     //then1
//     console.log(444);
//     // process.nextTick(() => {console.log(555);});
//     queueMicrotask(() => {
//       //第二队的微1(then2)
//       console.log(555);
//     });
//     setTimeout(() => {
//       // 定2
//       console.log(666);
//     }, 0);
//   })
//   .catch(() => {
//     console.log(777);
//   })
//   .then(() => {
//     //then3
//     console.log(888);
//     setImmediate(() => {
//       //立2
//       console.log(999);
//     });
//   })
//   .catch(() => {
//     console.log(101010);
//   });

// process.nextTick(() => {
//   //微1
//   console.log(111);
// });

// 4 1 3 6 8 2 7 5
// async function async1() {
//   console.log("1");
//   await async2();
//   console.log("2"); //微1等
// }
// async function async2() {
//   console.log("3");
// }
// console.log("4");
// setTimeout(() => {
//   //定1
//   console.log("5");
// }, 0);
// async1();
// new Promise((resolve) => {
//   console.log("6");
//   resolve();
// }).then(() => { //then2
//   console.log("7");
// });
// console.log("8");

// 1 2 3 8 4 7 5 6
// new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(1);
// })
//   .then(() => {
//     //then1
//     console.log(2);
//     new Promise((resolve, reject) => {
//       console.log(3);
//       resolve();
//     })
//       .then(() => {
//         //then2
//         console.log(4);
//       })
//       .then(() => {
//         console.log(5);
//       })
//       .then(() => {
//         console.log(6);
//       });
//     console.log(8);
//   })
//   .then(() => {
//     //then3
//     console.log(7);
//   });

// 1 2 9 4 10 13 3 15 16 5 6 8 7
// console.log(1); //
// new Promise(function (resolve) {
//   resolve();
//   console.log(2); //
//   setTimeout(function () {
//     // 定1
//     console.log(3); //
//   }, 0);
//   Promise.resolve().then(function () {
//     //then1
//     console.log(4); //
//     setTimeout(function () {
//       // 定3
//       console.log(5);
//     }, 0);
//     setTimeout(function () {
//       // 定4
//       (async function () {
//         console.log(6);
//         return function () {
//           console.log(7);
//         };
//       })().then(function (fn) {
//         console.log(8);
//         fn();
//       });
//     }, 0);
//   });
//   new Promise(function (resolve) {
//     console.log(9); //
//     resolve();
//   }).then(function () {
//     //then2
//     new Promise(function (resolve, reject) {
//       console.log(10);
//       reject();
//     })
//       .then(function () {
//         setTimeout(function () {
//           console.log(11);
//         }, 0);
//         console.log(12);
//       })
//       .catch(function () {
//         //then3
//         console.log(13);
//       });
//   });
// });
// setTimeout(function () {
//   //定2
//   console.log(15);
//   Promise.resolve().then(function () {
//     //then4
//     console.log(16);
//   });
// }, 0);

// 1 undefined 3 4 5 6 2
// const { log, dir } = console;
// async function fn1() {
//   log("11111111");
//   return Promise.resolve();
// }

// function fn2() {
//   log("33333333");
//   return 2;
// }
// fn();
// async function fn() {
//   const p1 = await fn1(); //await1
//   log(p1);
//   const p2 = await fn2();
//   log(p2);
// }

// log("444444");
// new Promise((res) => {
//   log("555555");
//   res("6666"); //成功的promise值为666
// }).then((value) => {
//   log(value); //then2 666
// });

// function testSometing() {
//   console.log("testSomething");
//   return "return testSomething";
// }
// async function testAsync() {
//   console.log("testAsync");
//   return Promise.resolve("hello async");
// }
// async function test() {
//   console.log("test start...");
//   const testFn1 = await testSometing(); //await1
//   console.log(testFn1); //return testSomething
//   const testFn2 = await testAsync(); //await2
//   console.log(testFn2); //hello async
//   console.log("test end...");
// }
// test();
// var promiseFn = new Promise((resolve) => {
//   console.log("promise START...");
//   resolve("promise RESOLVE");
// });
// promiseFn.then((val) => console.log(val)); //then1

// console.log("===END===");

// const buf1 = Buffer.alloc()

// const crypto = require("crypto");

// const md5 = crypto.createHash("md5");

// let password = "123456";

// const salt = "jjf*@#&ljfa";

// password = password + salt;

// const serct = md5.update(password, "utf8").digest("hex");
// console.log(serct);

// console.log(Buffer);
// const buf1 = Buffer.alloc(10);
// const buf2 = Buffer.alloc(10, "hello");
// const buf3 = Buffer.allocUnsafe(10);
// const buf4 = Buffer.from("你好");
// buf4.forEach((item) => console.log(item));
// console.log(buf4.toString());
// console.log(buf4);

// console.log(process.argv);
// console.log(process.argv0);
// console.log(process.cwd());
// let i = 0;
// setInterval(() => {
//   console.log(`${++i}`);
//   if (i > 5) {
//     process.exit();
//   }
// }, 500);

// const path = require("path");
// console.log(path.resolve("/add", "1.txt"));

// const EventEmitter = require("events");

// class MyEvent extends EventEmitter {}
// const event = new MyEvent();
// const fn = () => console.log("hhh");
// event.on("hello", fn);

// event.emit("hello");
// event.emit("hello");
// event.emit("hello");
// event.off("hello", fn);
// event.emit("hello");

// const crypto = require("crypto");

// const md5 = crypto.createHash("sha512");

// let password = "123456";

// password += "&%&$&@&@afda.,;',',f";

// const serct = md5.update(password, "uft8").digest("hex");
// console.log(serct);

// const fs = require("fs");
// const path = require("path");

// const filePath = path.resolve(__dirname, "01.txt");

// fs.open(filePath, "a", (err, fd) => {
//   if (err) {
//     console.log("err", err);
//     return;
//   }
//   fs.write(fd, "锄禾日当午", (err) => {
//     if (err) {
//       return;
//     }
//     console.log("文件写入成功");

//     fs.close(fd, (err) => {
//       if (err) {
//         return;
//       }
//       console.log("文件关闭成功");
//     });
//   });
// });

// const fs = require("fs");
// const path = require("path");

// const filePath = path.resolve(__dirname, "01.txt");

// (async function () {
//   const fd = await new Promise((resolve, reject) => {
//     fs.open(filePath, "a", (err, fd) => {
//       if (err) {
//         return reject(err);
//       }
//       console.log("打开文件成功");
//       resolve(fd);
//     });
//   });
//   await new Promise((resolve, reject) => {
//     fs.write(fd, "锄禾日当午", (err) => {
//       if (err) {
//         return reject(err);
//       }
//       console.log("文件写入成功");
//       resolve();
//     });
//   });
//   await new Promise((resolve, reject) => {
//     fs.close(fd, (err) => {
//       if (err) {
//         return reject(err);
//       }
//       console.log("文件关闭成功");
//       resolve();
//     });
//   });
// })();

// const fs = require("fs");
// const path = require("path");
// // promiseify
// const { promisify } = require("util");

// const filePath = path.resolve(__dirname, "01.txt");

// // 经过promiseify处理返回一个promise对象，用法还是跟以前一样
// const open = promisify(fs.open);
// const write = promisify(fs.write);
// const close = promisify(fs.close);

// (async function () {
//   const fd = await open(filePath, "a");
//   await write(fd, "锄禾日当午");
//   await close(fd);
// })()
//   .then(() => {
//     console.log("文件读取写入关闭全部成功");
//   })
//   .catch((reason) => {
//     console.log("err", reason);
//   });

// const fs = require("fs");
// const path = require("path");

// const filePath = path.resolve(__dirname, "01.txt");

// fs.writeFile(filePath, "锄禾日当午", { flag: "a" }, (err) => {
//   if (err) {
//     console.log("err", err);
//     return;
//   }
//   console.log("文件简单写入成功");
// });

// const fs = require("fs");
// const path = require("path");

// const filePath = path.resolve(__dirname, "01.txt");

// const ws = fs.createWriteStream(filePath);

// ws.write("锄禾日当午");

// // 只是为了监听
// ws.once("open", () => {
//   console.log("打开文件成功");
// });

// ws.once("close", () => {
//   console.log("可写流关闭");
// });

// const http = require("http");
// let count = 0;
// const server = http.createServer((request, response) => {
//   count++;
//   response.setHeader("Content-Type", "text/plain;charset=utf-8");
//   response.end(`您是第${count}位用户`);
// });
// server.listen(3000, "127.0.0.1", (err) => {
//   if (err) {
//     console.log("err", err);
//     return;
//   }
//   console.log("服务已开启");
// });

// const http = require("http");
// let count = 0;
// const server = http.createServer((request, response) => {
//   count++;
//   response.setHeader("Content-Type", "text/plain;charset=utf-8");
//   response.end(`您是第${count}位用户`);
// });

// server.listen(3000, "127.0.0.1", (err) => {
//   if (err) {
//     console.log("err", err);
//     return;
//   }
//   console.log("服务器已启动");
// });

// const http = require("http");
// let count = 0;
// const server = http.createServer((request, response) => {
//   count++;
//   response.setHeader("Content-Type", "text/plain;charset=utf-8");
//   response.end(`您是第${count}位用户`);
// });

// server.listen(3000, "127.0.0.1", (err) => {
//   if (err) {
//     console.log("err", err);
//   }
//   console.log("服务已开启");
// });

// 同步写入
// const fs = require("fs");
// const path = require("path");
// const filePath = path.resolve(__dirname, "01.txt");

// const fd = fs.open(filePath, "a", (err, fd) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("打开文件成功");

//   fs.write(fd, "hhh", (err) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log("写入成功");

//     fs.close(fd, (err) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       console.log("关闭成功");
//     });
//   });
// });

// 异步写入解决回调地域
// const fs = require("fs");
// const path = require("path");
// const filePath = path.resolve(__dirname, "01.txt");

// (async function () {
//   const fd = await new Promise((resolve, reject) => {
//     fs.open(filePath, "a", (err, fd) => {
//       if (err) {
//         return reject(err);
//       }
//       console.log("文件打开成功");
//       resolve(fd);
//     });
//   });

//   await new Promise((resolve, reject) => {
//     fs.write(fd, "hhh", (err) => {
//       if (err) {
//         reject(err);
//       }
//       console.log("文件写入成功");
//       resolve();
//     });
//   });

//   await new Promise((resolve, reject) => {
//     fs.close(fd, (err) => {
//       if (err) {
//         reject(err);
//       }
//       console.log("文件关闭成功");
//       resolve();
//     });
//   });
// })();

// const fs = require("fs");
// const path = require("path");
// const { promisify } = require("util");

// const filePath = path.resolve(__dirname, "01.txt");

// const open = promisify(fs.open);
// const write = promisify(fs.write);
// const close = promisify(fs.close);

// (async function () {
//   const fd = await open(filePath, "a");
//   await write(fd, "hhh");
//   await close(fd);
// })();

// fs.writeFile(filePath, "hhh", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("文件打开写入关闭成功");
// });

// fs.readFile(filePath, (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data.toString());
// });

// const ws = fs.createWriteStream(filePath);

// ws.write("hhh");
// ws.write("hhh");
// ws.write("hhh");
// ws.end();
// // ws.close();

// ws.on("open", () => {
//   console.log("文件打开了");
// });

// ws.on("close", () => {
//   console.log("文件关闭了");
// });

// const rs = fs.createReadStream(filePath);

// rs.on("data", (chunk) => {
//   console.log(chunk.toString());
// });

// rs.on("end", () => {
//   console.log("文件关闭了");
// });

// const fs = require("fs");
// const path = require("path");

// const filePath1 = path.resolve(__dirname, "01.txt");
// const filePath2 = path.resolve(__dirname, "03.txt");

// const rs = fs.createReadStream(filePath1);
// const ws = fs.createWriteStream(filePath2);

// rs.pipe(ws);

// const http = require("http");
// let count = 0;

// const server = http.createServer((request, response) => {
//   count++;
//   response.setHeader("Content-Type", "text/plain;charset=utf-8");
//   response.end(`您是第${count}位用户`);
// });

// server.listen(3000, "127.0.0.1", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("服务已开启");
// });
