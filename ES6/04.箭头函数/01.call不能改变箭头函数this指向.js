function foo() {
  console.log(this);
  return (a) => console.log(this.a);
}

const obj1 = { a: 2 };
const obj2 = { a: 3 };
const bar = foo.call(obj1); //2
bar.call(obj2); //2
