const obj = { a: 1, b: 2, c: 3 };
const clone = (obj) =>
  Object.create(
    Object.getPrototypeOf(obj),
    Object.getOwnPropertyDescriptors(obj)
  );
console.log(clone(obj));
