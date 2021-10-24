// 1 使用Promise实现每隔1秒输出1,2,3
// const arr = [1, 2, 3];
// test();
// async function test() {
//   arr.reduce((p, c) => {
//     return p.then(() => {
//       return new Promise((r) => {
//         setTimeout(() => {
//           r(console.log(c));
//         }, 1000);
//       });
//     });
//   }, Promise.resolve());
// }

// async function test() {
//   for (let i = 0; i < arr.length; i++) {
//     await Promise.resolve().then(() => {
//       return new Promise((r) => {
//         setTimeout(() => r(console.log(arr[i])), 1000);
//       });
//     });
//   }
// }

// 2. 使用Promise实现红绿灯交替重复亮
// 红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次；如何让三个灯不断交替重复亮灯？（用Promise实现）三个亮灯函数已经存在：
// function red() {
//   console.log("red");
// }
// function green() {
//   console.log("green");
// }
// function yellow() {
//   console.log("yellow");
// }

// const obj = new Map([
//   ["red", 3000],
//   ["green", 2000],
//   ["yellow", 1000],
// ]);

// const obj1 = {
//   red: 3000,
//   green: 2000,
//   yellow: 1000,
// };

// test();
// setInterval(() => {
//   test();
// }, 6000);

// async function test() {
//   for (let key of obj.entries()) {
//     await new Promise((r) => {
//       setTimeout(() => r(eval(key[0] + "()")), key[1]);
//     });
//   }
// }

// const light = function (timer, cb) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       cb();
//       resolve();
//     }, timer);
//   });
// };
// const step = function () {
//   Promise.resolve()
//     .then(() => {
//       return light(3000, red);
//     })
//     .then(() => {
//       return light(2000, green);
//     })
//     .then(() => {
//       return light(1000, yellow);
//     })
//     .then(() => {
//       return step();
//     });
// };

// step();

// 实现mergePromise函数，把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组data中。
func
