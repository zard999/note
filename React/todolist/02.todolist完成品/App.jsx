import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
// 引入axios
import axios from "axios";
// 引入nanoid
import { nanoid } from "nanoid";

export default class App extends Component {
  state = {
    todos: [],
    all: false,
  };
  render() {
    const { todos, all } = this.state;
    return (
      <div id="root">
        <div className="todo-container">
          {/* 头部 */}
          <Header changeTodos={this.changeTodos} />
          {/* List列表，将todos通过props传递给子组件 */}
          <List
            todos={todos}
            changeDone={this.changeDone}
            deleteItem={this.deleteItem}
          />
          <Footer
            todos={todos}
            checkAll={this.checkAll}
            all={all}
            clearComplete={this.clearComplete}
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
    // 挂载完成引入数据
    axios
      .post(
        "https://www.fastmock.site/mock/1067b8b6cb8580eddf730b26f9008bdb/test01/todo"
      )
      .then((res) => {
        const { todos } = res.data;
        this.setState({
          todos,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // 改变check选中和没选中
  changeDone = (id, done) => {
    const { todos } = this.state;
    // 遍历数据，如果id相等则改变状态
    todos.forEach((item, index) => {
      if (item.id === id) {
        item.done = !done;
      }
    });
    let all = todos.every((item, index) => {
      return item.done;
    });
    this.setState({
      todos,
      all,
    });
  };

  changeTodos = (e) => {
    const { todos } = this.state;
    const { target, keyCode } = e;
    // 如果输入的键盘的值不是回车，则不执行接下来的步骤
    if (keyCode !== 13) {
      return;
    }
    // 需要添加进去的item
    const obj = { id: nanoid(), content: e.target.value, done: true };
    const upTodos = [...todos, obj];
    this.setState({
      todos: upTodos,
    });
    target.value = "";
  };

  // 删除item
  deleteItem = (index) => {
    // 因为传参进来立即执行所以要return
    return () => {
      const { todos } = this.state;
      todos.splice(index, 1);
      this.setState(todos);
    };
  };

  // 全选
  checkAll = () => {
    const { todos, all } = this.state;
    if (!all) {
      todos.forEach((item) => {
        item.done = true;
      });
      this.setState({
        todos,
        all: !all,
      });
    }
  };

  // 清除已完成任务
  clearComplete = () => {
    const { todos } = this.state;
    todos.forEach((item, index) => {
      if (item.done) {
        todos.splice(index, 1);
      }
    });
    this.setState({
      todos,
    });
  };
}
