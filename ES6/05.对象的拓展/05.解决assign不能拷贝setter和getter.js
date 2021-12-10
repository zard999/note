// 解决assign不能拷贝set foo问题
const source = {
  set foo(value) {
    console.log(value);
  },
};

// const tar = {};
// Object.assign(tar, source);
// console.log(tar);
// Object.defineProperties(tar, Object.getOwnPropertyDescriptors(source));
// console.log(Object.getOwnPropertyDescriptor(tar, "foo"));
