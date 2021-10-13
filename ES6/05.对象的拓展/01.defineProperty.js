let obj = {};
// defineProperty绑定在构造器属性上
// es5 新增可描述符概念
/* 
    configurable: 可配置的，false => 不能删除
    enumerable: 可枚举的，
    writable: 可写,false = >不能重新赋值，严格模式会报错，删除可以正常删除
    value: 值
*/
Object.defineProperty(obj, "a", {
  value: 2,
  enumerable: true,
  configurable: false,
  writable: false,
});
