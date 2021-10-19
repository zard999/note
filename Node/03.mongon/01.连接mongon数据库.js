const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/teacher");

mongoose.connection.once("open", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("数据库连接成功");
});

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  age: Number,
  sex: {
    type: String,
    default: "男",
  },
  hobby: [String],
  createTime: {
    type: Date,
    default: Date.now,
  },
});

const teacherModel = mongoose.model("teacher", teacherSchema);

// new Teacher({
//   name: "zhangsan",
//   age: 20,
//   sex: "男",
//   hobby: ["teach", "read", ""],
//   createTime: Date.now(),
// }).save((err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("插入成功");
// });

// const zhangsan = teacherModel.create({
//   name: "zhangsan",
//   age: 20,
//   sex: "男",
//   hobby: ["teach", "read", "kkk"],
//   createTime: Date.now(),
// });

// const re = zhangsan.then((value) => {
//   console.log(value);
// });

// const fd = teacherModel.find({
//   $where: () => {
//     return this.name === "zhangsan";
//   },
// });

// fd.then((value) => {
//   console.log(value);
// });

// const fd = teacherModel.updateOne(
//   { name: "zhangsan" },
//   { $set: { name: "lisi" } }
// );

// fd.then((value) => {
//   console.log(value);
// });

const fd = teacherModel.deleteOne({
  name: "lisi",
});

fd.then((value) => {
  console.log(value);
});
