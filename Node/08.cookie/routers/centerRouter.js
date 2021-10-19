const express = require("express");
const userModel = require("../model/userModel");

const router = new express.Router();

router.post("/center", async (req, res) => {
  try {
    const re = await userModel.findOne({
      _id: req.cookies.user_id,
    });
    if (re) {
      return res.json({
        code: 100000,
        msg: re.user,
      });
    }
    res.json({
      code: 100001,
      msg: "非法访问",
    });
  } catch (e) {
    res.clearCookie("user_id");
    res.json({
      code: 100001,
      msg: "非法访问",
    });
  }
});

module.exports = router;
