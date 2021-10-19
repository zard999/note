const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user: {
    type: String,
    unique: true,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
