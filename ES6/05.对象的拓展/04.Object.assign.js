const obj = Object.create(
  { foo: 1 },
  {
    bar: {
      value: 2,
    },
    baz: {
      value: 3,
      enumerable: true,
    },
  }
);
// 继承属性和不可枚举属性不能拷贝
const copy = Object.assign({}, obj);
console.log(copy);

// 数组的替换
const a = Object.assign([1, 2, 3], [4, 5]);
console.log(a);

// 默认值问题
const Default = {
  url: {
    host: "www.baidu.com",
    port: 7070,
  },
};

function test(option) {
  option = Object.assign({}, Default, option);
  console.log(option);
}
// 用户如果没传入的话就默认端口
test({ url: { port: 8080 } });
