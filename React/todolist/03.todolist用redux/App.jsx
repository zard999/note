import React, { Component } from "react";

// 引入组件
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

// 引入store仓库
import store from "./store/index";

// 引入生成id
import { nanoid } from "nanoid";

import "./App.css";

export default class App extends Component {
  state = store.getState();

  storeChange = () => {
    this.setState(store.getState());
  };

  // 添加item
  addContent = (e) => {
    const { target, keyCode } = e;
    if (keyCode !== 13) {
      return;
    }
    const obj = { id: nanoid(), content: target.value, done: true };
    const todos = [...this.state.todos, obj];

    //创建新的状态
    const action = {
      type: "add_content",
      value: todos,
    };

    store.dispatch(action);
  };

  // 点击改变done的状态
  changeDone = (id, done) => {
    const { todos } = this.state;

    todos.forEach((item, index) => {
      if (item.id === id) {
        item.done = !done;
      }
    });

    const action = {
      type: "change_done",
      value: todos,
    };

    store.dispatch(action);
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addContent={this.addContent} />
          <List todos={todos} changeDone={this.changeDone} />
          <Footer todos={todos} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    // 订阅Redux状态 subscribe(订阅)
    store.subscribe(this.storeChange);
  }
}
