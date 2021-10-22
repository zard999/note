// 1 使用Promise实现每隔1秒输出1,2,3
const arr = [1, 2, 3];
// arr.reduce((p, c) => {
//   return p.then(() => {
//     return new Promise((r) => {
//       setTimeout(() => r(console.log(c)), 1000);
//     });
//   });
// }, Promise.resolve());

arr.reduce((p, c) => {
  return p.then(() => {
    return new Promise((r) => {
      setTimeout(() => {
        r(console.log(c));
      }, 1000);
    });
  });
}, Promise.resolve());

// async function test() {
//   for (let i = 0; i < arr.length; i++) {
//     await Promise.resolve().then(() => {
//       return new Promise((r) => {
//         setTimeout(() => r(console.log(arr[i])), 1000);
//       });
//     });
//   }
// }

// test();
