var arr = [];

for (let i = 0; i < 10; i++) {
  arr[i] = (() => {
    console.log(i);
  })(1);
}

function getSum(nums) {
  return nums.reduce((total, cur) => total + cur, 0);
}
