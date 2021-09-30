// 按下面的期望值实现日期格式的转换操作

var date = "10.24/2017";
// 期望输出值 2017-10-24
console.log(date.split("/").reverse().join("-").replace(/\.+/g, "-"));

var reg = /(\d{2})\.(\d{2})\/(\d{4})/;

console.log(
  date.replace(reg, function ($, $1, $2, $3) {
    return `${$3}-${$1}-${$2}`;
  })
);
