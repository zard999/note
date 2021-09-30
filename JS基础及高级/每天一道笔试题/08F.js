var foo = 1;

(function foo() {
  // foo函数名字直接忽略掉
  foo = 10;
  console.log(foo); // 匿名函数有函数名时是只读的，不能更改
})();
