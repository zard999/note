"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function getSum(nums) {
  return nums.reduce(function (p, v) {
    return p + v;
  }, 0);
}

var _default = getSum;
exports["default"] = _default;