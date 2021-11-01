import React, { Component } from "react";

// 引入组件
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

import "./App.css";

export default class App extends Component {
  state = {
    todos: [
      { id: Date.now(), content: "抽烟", done: true },
      { id: Date.now() + 1, content: "喝酒", done: false },
      { id: Date.now() + 2, content: "烫头", done: true },
    ],
    num: 0,
  };

  // 点击改变done的状态
  changeDone = (id, done) => {
    const { todos } = this.state;

    todos.forEach((item, index) => {
      if (item.id === id) {
        item.done = !done;
      }
    });

    this.setState({
      todos,
    });

    // 每次更改状态重新执行一次计算
    this.computeNum();
  };

  // 计算todos中done是true的数量
  computeNum = () => {
    let { todos, num } = this.state;
    // 每次重新计算
    num = 0;
    todos.forEach((item, index) => {
      if (item.done) {
        num++;
      }
    });
    this.setState({
      num,
    });
  };

  render() {
    const { todos, num } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header />
          <List todos={todos} changeDone={this.changeDone} />
          <Footer todos={todos} num={num} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.computeNum();
  }
}
