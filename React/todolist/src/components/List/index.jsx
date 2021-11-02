import React, { Component } from "react";

import Item from "../Item";

import "./index.css";

export default class List extends Component {
  render() {
    //拿到父组件传递的任务列表 todos
    const { todos, changeDone, deleteTodo } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((todo, index) => {
          //todo:{ id: Date.now(), content: "抽烟", done: true },
          return (
            <Item
              key={todo.id}
              {...todo}
              changeDone={changeDone}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    );
  }
}
