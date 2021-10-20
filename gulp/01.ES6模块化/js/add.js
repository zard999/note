function add(a, b) {
  return a + b;
}

const arr = [];

for (let i = 0; i < 10; i++) {
  arr[i] = (() => {
    console.log(i);
  })(i);
}

function getSum(nums) {
  return nums.reduce((p, v) => p + v, 0);
}

async function test() {
  const c1 = await setTimeout(() => {
    console.log("等一下");
  }, 1000);
  console.log("好了");
}

export { add, getSum };
