// function fn() {
//   var a = 1;
// }
// console.log(1);

// {
//   let c = 1;
// }
// console.log(c);

// outer: for (var i = 0; i < 5; i++) {
//   inner: for (var j = 0; j < 3; j++) {
//     if (i === 3) {
//       break inner;
//     }
//     console.log(i);
//   }
// }

// for (let i = 0; i < 5; i++) {
//   i = "a";
//   console.log(i);
// }

// for (let i = 0; i < 5; i++) {
//   var i = "a";
//   console.log(i);
// }

// for (let i = 0; i < 5; i++) {
//   let i = "a";
//   console.log(i);
// }

// for (var i = 0; i < 5; i++) {
//   i = "a";
//   console.log(i);
// }

// for (var i = 0; i < 5; i++) {
//   let i = "a";
//   console.log(i);
// }

// for (let i = 0; i < 5; i++) {
//   (function (i) {
//     setTimeout(function () {
//       console.log(i);
//     }, 0); // 0~4
//   })(i);
// }

// {
//   const PI = 3.14;
// }
// console.log(PI);

// {
//   const arr = [1, 2, 3];
//   arr.push(1);
//   console.log(arr);
// }

// {
//   const PI;
// }

// {
//   const a = 1;
//   a = 2;
// }

// const obj = {};
// const str = "user=laowang";
// const [key, value] = str.split("=");
// obj[key] = value;
// console.log(obj);

// {
//   const [a, b, c] = [1, 2];
//   console.log(a, b, c);
// }

// {
//   const [a, b] = [1];
//   console.log(a, b);
// }

// {
//   const [a, b, c = 0] = [1, 2];
//   console.log(a, b, c);
// }

// {
//   const [a, b, c = 0] = [1, 2, 3];
//   console.log(a, b, c);
// }

// {
//   const [a, b, ...rest] = [1, 2, 3, 4, 5, 6, 7];
// }

// {
//   const arr = [1, 2, [3, 4, [5], 6], 7];
//   const [a, b, [c, d, [e], f], g] = arr;
//   console.log(a, b, c, d, e, f, g);
// }

// {
//   let a = 1;
//   let b = 2;
//   [b, a] = [a, b];
//   console.log(a, b);
// }

// let [a = 2, b = a] = [];
// console.log(a, b);

// const obj = {
//   name: "laowang",
//   age: 18,
//   sex: "男",
// };

// const { name, age, sex } = obj;
// console.log(name, age, sex);

// const { log } = console;

// log(1);

// const arr = [1, 2, 3];

// function fn(...rest) {
//   console.log(rest);
// }
// fn(1,2,3);

//案例(使用解构赋值 拿到数组的第一个值和最后一个值)
// const arr = [1, 3, 4, 5, 6, 7, 8];
// const { 0: a, [arr.length - 1]: b } = arr;

// console.log(a, b);

// const str = "  123   123  123";
// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());

// // 去除全部空格
// console.log(str.replace(/\s+/g, ""));

// const str2 = "hello nodejs";
// console.log(str2.startsWith("he"));
// console.log(str2.endsWith("js"));
// console.log(str2.includes("llo"));

// console.log(str2.repeat(10));

// const str3 = "434546437";
// console.log(str3.padStart(15, 0));
// console.log(str3.padEnd(15, "*"));

// console.log(Math.pow(2, 2));
// console.log(2 ** 2);
// console.log(2 ** (3 ** 3));

// console.log(Math.trunc(3.14));
// console.log(Math.trunc(-3.14));

// console.log(Math.sign(0));
// console.log(Math.sign(4));
// console.log(Math.sign(NaN));
// console.log(Math.sqrt(2));
// console.log(Math.sqrt(3));
// console.log(Math.cbrt(8));
// console.log(Math.hypot(4, 5));

// console.log(Number.isFinite(Infinity)); // 是否有限
// console.log(Number.isFinite(3));

// console.log(Number.isNaN(NaN));

// const arr = [1, 2, 3, 4, 5, 6];
// console.log(...arr);

// 复制数组
// const arr2 = [...arr];
// console.log(arr2);

// 合并数组
// const arr3 = [...arr, 7, 8, 9];
// console.log(arr3);

// 字符串转换为数组
// const str = "rasfwaef";
// const arr = [...str];
// console.log(arr);

// const likeArr = {
//   0: "a",
//   1: "b",
//   2: "c",
//   3: "d",
//   length: 4,
// };

// console.log(Array.from(likeArr));
// console.log(Array.of(10));
// console.log(new Array(10));

// function fn(a = 1, b = 1) {
//   console.log(a + b);
// }

// fn(2, 3);
//封装一个函数，求所有实参的和
// function sum(...rest) {
//   return rest.reduce((prev, cur) => prev + cur);
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 7));

// const arr = [1, 2, 3, 4, 5, 6];
// const re = arr.reduce((prev, cur) => prev + cur);
// console.log(re);
