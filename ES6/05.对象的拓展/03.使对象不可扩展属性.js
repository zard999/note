const obj = {
  a: 2,
};

// preventExtensions使对象不能扩展属性
// Object.preventExtensions(obj);

Object.seal(obj);

// 属性描述符默认是true
// obj.b = 3;

// 这种添加属性的方法比较好，对象不能扩展属性后会报错
// 属性描述符默认是false
Object.defineProperty(obj, "b", {
  value: 6,
});

// isExtensible检测对象是否能扩展属性
console.log(Object.isExtensible(obj));
console.log(obj);
console.log(obj);
