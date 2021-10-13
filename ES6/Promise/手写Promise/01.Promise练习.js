// 1. Promise的几道基础题
// 1.1
// const promise1 = new Promise((resolve, reject) => {
//   console.log("promise1"); //promise1
// });
// console.log("1", promise1); // 1 promise{<pending>}

// 1.2
// 1 2 4 3(同步和异步)
// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve("success");
//   console.log(2);
// });
// promise.then(() => {
//   console.log(3);
// });
// console.log(4);

// 1.3
// 1 2 4
// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   console.log(2);
// });
// promise.then(() => {
//   console.log(3);
// });
// console.log(4);

// 1.4
// promise1 1 promise{<fulfilled>} 2 promise{<pending>} resolve1
// const promise1 = new Promise((resolve, reject) => {
//   console.log("promise1");
//   resolve("resolve1");
// });
// const promise2 = promise1.then((res) => {
//   console.log(res);
// });
// console.log("1", promise1);
// console.log("2", promise2);

// 1.5
// 1 start success
// const fn = () =>
//   new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("success");
//   });
// fn().then((res) => {
//   console.log(res);
// });
// console.log("start");

// 1.6
// start 1 success
// const fn = () =>
//   new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("success");
//   });
// console.log("start");
// fn().then((res) => {
//   console.log(res);
// });

// 2. Promise结合setTimeout
// 2.1
// start end resolve time
// console.log("start");
// setTimeout(() => {
//   console.log("time");
// });
// Promise.resolve().then(() => {
//   console.log("resolve");
// });
// console.log("end");

// 2.2
// 1 2 4 timerStart timerEnd success
// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   setTimeout(() => {
//     console.log("timerStart");
//     resolve("success");
//     console.log("timerEnd");
//   }, 0);
//   console.log(2);
// });
// promise.then((res) => {
//   console.log(res);
// });
// console.log(4);

// 2.3
// start timer1 timer2 timer3
// setTimeout(() => {
//   console.log("timer1");
//   setTimeout(() => {
//     console.log("timer3");
//   }, 0);
// }, 0);
// setTimeout(() => {
//   console.log("timer2");
// }, 0);
// console.log("start");

// start timer1 promise timer2
// setTimeout(() => {
//   console.log("timer1");
//   Promise.resolve().then(() => {
//     console.log("promise");
//   });
// }, 0);
// setTimeout(() => {
//   console.log("timer2");
// }, 0);
// console.log("start");

// 2.4
// start promise1 timer1 promise2 timer2
// Promise.resolve().then(() => {
//   console.log("promise1");
//   const timer2 = setTimeout(() => {
//     console.log("timer2");
//   }, 0);
// });
// const timer1 = setTimeout(() => {
//   console.log("timer1");
//   Promise.resolve().then(() => {
//     console.log("promise2");
//   });
// }, 0);
// console.log("start");

// 2.5
// promise1, Promise{<pending>} promise2 Promise{<penging>} error!! promise1 Promise{<resolved>: "success"} promise2 Promise{<rejected>: "Error: error!!"}
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("success");
//   }, 1000);
// });
// const promise2 = promise1.then(() => {
//   throw new Error("error!!!");
// });
// console.log("promise1", promise1);
// console.log("promise2", promise2);
// setTimeout(() => {
//   console.log("promise1", promise1);
//   console.log("promise2", promise2);
// }, 2000);

// 2.6
// promise1里的内容 promise1 Promise{<pending>} promise2 Promise{<pending>} timer1 Error timer2 promise1 Promise{<resolved>: "success"} promise2 Promise{<reject>: "Error: error!!"}
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("success");
//     console.log("timer1");
//   }, 1000);
//   console.log("promise1里的内容");
// });
// const promise2 = promise1.then(() => {
//   throw new Error("error!!!");
// });
// console.log("promise1", promise1);
// console.log("promise2", promise2);
// setTimeout(() => {
//   console.log("timer2");
//   console.log("promise1", promise1);
//   console.log("promise2", promise2);
// }, 2000);

// 3.Promise中的then、catch、finally
