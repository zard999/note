const binarySearchLeft = function (nums, target) {
  let left = -1,
    right = nums.length;
  while (left + 1 != right) {
    const mid = (left + right) >> 2;
    if (nums[mid] >= target) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return right;
};

const binarySearchRight = function (nums, target) {
  let left = -1,
    right = nums.length;
  while (left + 1 != right) {
    const mid = (left + right) >> 2;
    if (nums[mid] > target) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return left;
};
