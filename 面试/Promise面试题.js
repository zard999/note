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
function red() {
  console.log("red");
}
function green() {
  console.log("green");
}
function yellow() {
  console.log("yellow");
}

const obj = new Map([
  ["red", 3000],
  ["green", 2000],
  ["yellow", 1000],
]);

const obj1 = {
  red: 3000,
  green: 2000,
  yellow: 1000,
};
// console.log(Object.keys(obj1));

test();
setInterval(() => {
  test();
}, 6000);

async function test() {
  for (let key of obj.entries()) {
    await new Promise((r) => {
      setTimeout(() => r(eval(key[0] + "()")), key[1]);
    });
  }
}

// function test() {
//   arr.reduce((p, c) => {
//     return p.then(() => {
//       return new Promise((r) => {
//         setTimeout(() => {
//           r(red());
//         }, c);
//       });
//     });
//   }, Promise.resolve());
// }
