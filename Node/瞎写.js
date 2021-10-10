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
