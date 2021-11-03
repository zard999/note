import React, { Component } from "react";

export default class Info extends Component {
  render() {
    const { name, age, say } = this.props.match.params;
    return (
      <ul>
        <li>姓名：{name} </li>
        <li>年龄：{age} </li>
        <li>说：{say} </li>
      </ul>
    );
  }
}
