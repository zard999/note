const express = require("express");
const userModel = require("../model/userModel");
const router = new express.Router();

router.post("/login", (req, res) => {
  const { user, pass } = req.query;
  const re = userModel.findOne({
    user,
    pass,
  });

  if (re) {
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
