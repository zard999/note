import React, { Component } from "react";
import "./index.css";

export default class Header extends Component {
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
          onKeyDown={this.changeIpt}
        />
      </div>
    );
  }

  // 增加item
  changeIpt = (e) => {
    const { changeTodos } = this.props;
    changeTodos(e);
  };
}
