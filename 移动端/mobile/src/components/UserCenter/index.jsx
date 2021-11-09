/*
 * @Author: your name
 * @Date: 2021-11-09 11:40:32
 * @LastEditTime: 2021-11-09 17:56:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \note\移动端\mobile\src\components\UserCenter\index.jsx
 */
import React, { Component } from "react";
import { Toast, Button } from "antd-mobile";
import { verifyUserState, userOut } from "../../config/ajax";

export default class UserCenter extends Component {
  state = {
    _id: "",
  };

  render() {
    return (
      <div>
        UserCenter
        <Button color="warning" block onClick={this.userOut}>
          退出登录
        </Button>
      </div>
    );
  }

  async componentDidMount() {
    const verifyResult = await verifyUserState();
    const { code, message } = verifyResult;
    if (code !== 20000) {
      Toast.show({
        icon: "fail",
        content: message,
      });
      this.props.history.push("/login");
    }
    console.log(verifyResult);
    this.setState({
      _id: verifyResult.data._id,
    });
  }

  userOut = async () => {
    const { _id } = this.state;
    const re = await userOut(_id);
    Toast.show({
      icon: "fail",
      content: "注销成功，请重新登录",
    });
    this.props.history.push("/login");
  };
}
