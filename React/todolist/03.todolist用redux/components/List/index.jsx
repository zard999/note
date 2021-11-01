import Item from "../Item";
import React, { Component } from "react";
import "./index.css";
export default class List extends Component {
  render() {
    const { todos, changeDone } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((todo, index) => {
          return <Item key={todo.id} {...todo} changeDone={changeDone} />;
        })}
      </ul>
    );
  }
}
