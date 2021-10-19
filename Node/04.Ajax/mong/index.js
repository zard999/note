require("./db");
const userModel = require("./model/userModel");

// const ct = userModel.create({
//   user: "zhangsan",
//   pass: "123456",
// });

// const fd = userModel.find(
//   {
//     $where: () => this.name === "zhangsan",
//   },
//   { user: 1, _id: 0 }
// );

// const ud = userModel.updateOne(
//   {
//     $where: () => this.user === "zhangsan",
//   },
//   { $set: { user: "lisi" } }
// );

const dl = userModel.deleteOne({
  user: "lisi",
});

dl.then((val) => console.log(val));
