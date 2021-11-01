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
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header />
          <List todos={todos} />
          <Footer />
        </div>
      </div>
    );
  }
}
