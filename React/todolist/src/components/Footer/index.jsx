import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  render() {
    const { todos, num } = this.props;
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" />
        </label>
        <span>
          <span>已完成{num}</span> / 全部{todos.length}
        </span>
        <button className="btn btn-danger">清除已完成任务</button>
      </div>
    );
  }
}
