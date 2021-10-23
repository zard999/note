// 1. 数组浅拷贝
// const arr = [1, 2, 3];
// const arrClone = [...arr];
// console.log(arrClone);
// 2. 对象也可以拷贝
// const obj = { a: 1 };
// const objClone = { ...obj };
// console.log(objClone);

// 3. 数组取交集
// const a = [0, 1, 2, 3, 4, 5];
// const b = [3, 4, 5, 6, 7, 8];
// const dup = [...new Set(a)].filter((item) => b.includes(item));
// console.log(dup);

// 4. 数组取差集
// const a = [0, 1, 2, 3, 4, 5];
// const b = [3, 4, 5, 6, 7, 8];
// const diff = [...new Set([...a, ...b])].filter(
//   (item) => !a.includes(item) || !b.includes(item)
// );
// console.log(diff);

// // 5. 数组转对象
// const arr = [1, 2, 3, 4];
// const obj = { ...arr };
// console.log(obj);
// // 不行
// // let newArr = [...obj];
// // console.log(newArr);
// obj.length = 4;
// let newArr2 = Array.from(obj);
// console.log(newArr2);

// 6. 数组摊平
// const obj = { a: "群主", b: "男群友", c: "女裙友", d: "未知性别" };
// const getName = function (item) {
//   return item.includes("群");
// };
// const flagArr = Object.values(obj)
//   .flat()
//   .filter((item) => getName(item));

// 7. flat的意义是有二维的时候扁平化
// const flagArr = Object.values(obj).flat().filter(getName);
// console.log(flagArr);

// 8. 假如有如下每个元素都由字母's'加数字组成的数组arr，现在找出其中最大的数字：（arr不为空）
// const arr = ["s0", "s1", "s2", "s3", "s4"];

// const maxValue = arr.reduce((p, c) => {
//   const curIndex = c.replace(/s/g, "");
//   return (p = curIndex > p ? curIndex : p);
// }, 0);
// console.log(maxValue);

// 9. 利用reduce 输出一个数组/对象
