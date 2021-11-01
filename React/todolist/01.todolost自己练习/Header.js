import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import { Input } from "antd";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <Input
          placeholder="请输入你的任务名称，按回车键确认"
          style={{ width: "480px", marginLeft: "-14px" }}
          onPressEnter={this.props.onPressEnter}
        />
      </Fragment>
    );
  }
}

export default Header;
