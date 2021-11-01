import React, { Component } from "react";
import Item from "../Item";
import "./index.css";

export default class List extends Component {
  render() {
    const { todos, changeDone, deleteItem } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((item, index) => {
          return (
            <Item
              key={item.id}
              {...todos}
              item={item}
              index={index}
              changeDone={changeDone}
              deleteItem={deleteItem}
            />
          );
        })}
      </ul>
    );
  }
}
