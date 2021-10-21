// 输出以下代码运行结果，并解释原因？如果希望每隔1s输出一个结果，应该如何改造？注意不可改动square方法

const list = [1, 2, 3];

const square = (num) => {
  //1
  return new Promise((res, rej) => {
    setTimeout(() => {
      //h
      res(num * num);
    }, 1000);
  });
};

async function test() {
  list.forEach((x) => {
    const res = await square(x);
    console.log(res); //1 4 9
  });
}

function test() {
    list.reduce((p, c, i) => {
      return p
        .then(() => {
          return square(c);
        })
        .then((val) => {
          console.log(val);
        });
    }, Promise.resolve());
  }
test();

//
