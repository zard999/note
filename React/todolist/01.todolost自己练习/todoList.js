import React, { Component } from "react";
import "antd/dist/antd.css";
import { List } from "antd";
import { nanoid } from "nanoid";
import Header from "./Header";
import JList from "./JList";
import Footer from "./footer";

class ToDoList extends Component {
  state = {
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "打代码", done: false },
    ],
    mouse: false,
    complete: 0,
  };

  handleValue = (e) => {
    const { target } = e;
    if (target.value.trim() === "") {
      alert("输入不能为空");
    }
    const todoObj = { id: nanoid(), name: target.value, done: false };
    this.setState({
      todos: [...this.state.todos, todoObj],
    });
  };

  handleCheck = (id) => {
    return (e) => {
      console.log(e.target.checked);
      this.state.todos(id, e.target.checked);
    };
  };

  deleteItem = (index) => {
    return () => {
      const { todos } = this.state;
      todos.splice(index, 1);
      this.setState({
        todos,
      });
    };
  };

  render() {
    return (
      <div style={{ margin: "10px", width: "500px" }}>
        <List
          bordered
          header={<Header onPressEnter={this.handleValue} />}
          footer={
            <Footer todos={this.state.todos} complete={this.state.complete} />
          }
        >
          <JList
            dataSource={this.state.todos}
            mouse={this.state.mouse}
            deleteItem={this.deleteItem}
          />
        </List>
      </div>
    );
  }

  componentDidMount() {
    let { complete, todos } = this.state;
    todos.forEach((item) => {
      if (item.done) {
        complete++;
      }
    });
    this.setState({
      complete,
    });
  }
}

export default ToDoList;
