import React, { Component } from "react";
import "./index.css";
export default class Header extends Component {
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
          onKeyUp={this.addTodo}
        />
      </div>
    );
  }

  addTodo = (e) => {
    const { target, keyCode } = e;
    if (keyCode !== 13) return;

    if (target.value.trim() === "") return;
    const { addTodo } = this.props;

    const nowTodo = {
      id: Date.now(),
      content: target.value,
      done: false,
    };

    addTodo(nowTodo);
  };
}
