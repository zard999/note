var fullName = "a";
var obj = {
  fullName: "b",
  prop: {
    fullName: "c",
    getFullName: function () {
      return this.fullName;
    },
  },
};

console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test()); // 不在node环境打印a，node环境打印undefined
