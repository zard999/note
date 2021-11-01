import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  render() {
    const { todos, checkAll, all,clearComplete } = this.props;
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={all} onChange={checkAll} />
        </label>
        <span>
          {" "}
          <span>已完成{doneCount}</span> / 全部{todos.length}{" "}
        </span>
        <button className="btn btn-danger" onClick={clearComplete}>
          清除已完成任务
        </button>
      </div>
    );
  }

  
}
