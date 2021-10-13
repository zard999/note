// test1
// const obj = {
//   log: ["example", "test"],
//   // get 直接重写了属性获取
//   get latest() {
//     if (this.log.length === 0) {
//       return undefined;
//     }

//     return this.log[this.log.length - 1];
//   },
// };

// console.log(obj.latest);

// test2
// const myObject = {
//   get a() {
//     return 2;
//   },
// };

// Object.defineProperty(myObject, "b", {
//   get: function () {
//     return this.a * 2;
//   },
//   enumerable: true,
//   //   writable,value, 不能写这两个属性，因为和get完全重复矛盾，true或false都报错
// });

// console.log(myObject.a);
// console.log(myObject.b);

// test3
// const language = {
//   // set一定要有个参数,也是重写并执行
//   set current(name) {
//     this.log.push(name);
//   },
//   log: [],
// };

// language.current = "EN";
// console.log(language.log);

// // test4
// const obj2 = {
//   get a() {
//     return this._a;
//   },
//   set a(val) {
//     this._a = val * 2;
//   },
// };

// obj2.a = 3;

// console.log(obj2.a);

// test5
const obj3 = {
  get foo() {},
  set foo(x) {},
};

// 不能获取到foo
// console.log(obj3.foo.name);

const descript = Object.getOwnPropertyDescriptor(obj3, "foo");
console.log(descript.get.name);
