import React, { Component } from "react";
// 可以处理查询字符串的插件
import qs from "qs";

export default class Info extends Component {
  render() {
    const str = this.props.location.search.slice(1);
    const { name, age, say } = qs.parse(str);
    return (
      <ul>
        <li>姓名：{name} </li>
        <li>年龄：{age} </li>
        <li>说：{say} </li>
      </ul>
    );
  }
}
