require("./db");
const mongoose = require("mongoose");
const studentModel = require("./model/studentModel");

// 增
// const cr = studentModel.create({
//   name: "张三",
//   age: 20,
//   sex: "男",
//   hobby: ["read", "write"],
//   createTime: Date.now(),
// });

// cr.then((value) => {
//   console.log(value);
// });

// 查
const fd = studentModel.find(
  {
    $where: () => this.name === "张三",
  },
  { name: 1, _id: 0 }
);

fd.then((value) => {
  console.log(value);
});

// const ud = studentModel.update({ name: "张三" }, { $set: { name: "李四" } });

// ud.then((value) => {
//   console.log(value);
// });

// 删除
// const del = studentModel.deleteOne({ name: "李四" });

// del.then((value) => {
//   console.log(value);
// });
