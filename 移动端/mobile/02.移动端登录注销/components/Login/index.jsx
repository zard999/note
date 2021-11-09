/*
 * @Author: your name
 * @Date: 2021-11-09 11:40:32
 * @LastEditTime: 2021-11-09 17:41:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \note\移动端\mobile\src\components\UserCenter\index.jsx
 */
import React, { Component } from "react";
import { NavBar, Input, Button, Toast } from "antd-mobile";
import { phoneReg, verifyReg } from "../../config/reg";
// 引入axios
import { getVerifyCode, getLoginCode } from "../../config/ajax";
import "./index.less";
import github from "./img/github.png";
import qq from "./img/qq.png";
import wechat from "./img/wechat.png";

export default class Login extends Component {
  state = {
    phone: "",
    verify: "",
  };
  render() {
    return (
      <div>
        <NavBar
          style={{
            "--height": "66px",
            "--border-bottom": "1px #eee solid",
          }}
        >
          手机验证码登录
        </NavBar>
        <div className="iptOuter">
          <Input
            placeholder="请输入电话号码"
            style={{
              "--font-size": "20px",
              borderBottom: "1px solid #ccc",
            }}
            onChange={this.saveData("phone")}
          />
          <div className="invert">
            <Input
              placeholder="请输入验证码"
              style={{
                "--font-size": "20px",
                borderBottom: "1px solid #ccc",
              }}
              onChange={this.saveData("verify")}
            />
            <Button color="primary" onClick={this.getVerify}>
              获取验证码
            </Button>
          </div>
          <Button
            block
            color="primary"
            onClick={this.login}
            style={{ marginTop: "40px" }}
          >
            登录
          </Button>
        </div>
        <div className="link">
          <h3>请选择其他登录方式</h3>
          <div className="icons">
            <img src={github} alt="" />
            <img src={qq} alt="" />
            <img src={wechat} alt="" />
          </div>
        </div>
      </div>
    );
  }

  saveData = (type) => {
    return (value) => {
      if (type === "phone" && phoneReg.test(value)) {
        this.setState({
          [type]: value,
        });
      } else if (type === "verify" && verifyReg.test(value)) {
        this.setState({
          [type]: value,
        });
      } else {
        this.setState({
          [type]: "",
        });
      }
    };
  };

  getVerify = async () => {
    const { phone } = this.state;
    if (!phone) {
      return Toast.show({
        icon: "fail",
        content: "手机号码不正确",
      });
    }
    const verityCodeData = await getVerifyCode(phone);
    console.log(verityCodeData);
  };

  login = async () => {
    const { phone, verify } = this.state;
    if (!phone || !verify) {
      return Toast.show({
        icon: "fail",
        content: "请验证您的输入",
      });
    }

    const LoginCodeData = await getLoginCode(phone, verify);
    console.log(LoginCodeData);
    if (LoginCodeData.code === 20000) {
      Toast.show({
        icon: "success",
        content: "登录成功",
      });
      console.log(LoginCodeData.code);
      // 路由跳转
      this.props.history.push("/usercenter");
    } else {
      Toast.show({
        icon: "fail",
        content: "登录失败",
      });
    }
  };
}
