const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
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

const studentModel = mongoose.model("class", studentSchema);

module.exports = studentModel;
