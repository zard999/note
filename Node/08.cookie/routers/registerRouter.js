const express = require("express");
const userModel = require("../model/userModel");
const router = new express.Router();
const md5 = require("md5");

router.post("/register", async (req, res) => {
  const { user, pass } = req.body;
  const re = await userModel.findOne({
    user,
  });
  if (re) {
    return res.json({
      code: 100001,
      msg: "用户名重复",
    });
  }

  await userModel.create({
    user,
    pass: md5(pass),
  });
  res.json({
    code: 100000,
    msg: "注册成功",
  });
});

module.exports = router;
