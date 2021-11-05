import React, { Component } from "react";
// 可以处理查询字符串的插件

export default class Info extends Component {
  render() {
    const { name, age, say } = this.props.location.state;
    return (
      <ul>
        <li>姓名：{name} </li>
        <li>年龄：{age} </li>
        <li>说：{say} </li>
      </ul>
    );
  }
}
