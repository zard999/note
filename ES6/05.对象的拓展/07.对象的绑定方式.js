const prot = { a: 1 };
// const obj = Object.create(prot);

// const obj = Object.assign(Object.create(prot), { foo: 123 });

const obj = Object.assign(
  Object.create(prot, Object.getOwnPropertyDescriptors({ foo: 123 }))
);
console.log(obj);
