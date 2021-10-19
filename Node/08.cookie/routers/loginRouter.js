const express = require("express");
const userModel = require("../model/userModel");
const router = new express.Router();
const md5 = require("md5");

router.post("/login", async (req, res) => {
  const { user, pass } = req.body;

  const re = await userModel.findOne({
    user,
    pass: md5(pass),
  });
  if (re) {
    res.cookie("user_id", re._id, {
      httpOnly: true,
      maxAge: 1000 * 3600 * 24 * 7,
    });
    return res.json({
      code: "100000",
      msg: "登录成功",
    });
  }
  res.json({
    code: "100001",
    msg: "登录失败",
  });
});

module.exports = router;
