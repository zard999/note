import React, { Component } from "react";
import "./index.css";
export default class Footer extends Component {
  render() {
    const { todos } = this.props;
    const num = todos.reduce((p, c) => (c.done ? p + 1 : p + 0), 0);
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={num === todos.length && num !== 0}
            onChange={this.checkAll}
          />
        </label>
        <span>
          <span>已完成{num}</span> / 全部{todos.length}
        </span>
        <button onClick={this.deleteAll} className="btn btn-danger">
          清除已完成任务
        </button>
      </div>
    );
  }

  deleteAll = () => {
    const { deleteAllTodo } = this.props;
    deleteAllTodo();
  };

  checkAll = (e) => {
    const { checkAll } = this.props;
    checkAll(e.target.checked);
  };
}
