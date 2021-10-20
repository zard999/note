// 打印输出结果  并将函数改成1s输出一个结果，不可改动square
const list = [1, 2, 3];

const square = (num) => {
  return new Promise((resolve, reject) => {
    // 宏任务
    setTimeout(() => {
      resolve(num * num);
    }, 5000);
  });
};

function test() {
  list.forEach(async (x) => {
    const res = await square(x);
    console.log(res);
  });
}
test();
