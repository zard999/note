import { Component } from "react";

//引入组件
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  //初始化一个保存todo列表的状态
  state = {
    todos: [
      { id: Date.now(), content: "抽烟", done: true },
      { id: Date.now() + 1, content: "喝酒", done: true },
      { id: Date.now() + 2, content: "烫头", done: true },
    ],
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} changeDone={this.changeDone} />
          <Footer />
        </div>
      </div>
    );
  }

  //修改state的done的状态
  changeDone = (id, preDone) => {
    const { todos } = this.state;
    //拿到state中的每一个值，一个个的和传入的id对比，判断用户点的是哪一个
    const newTodos = todos.map((item) => {
      //判断id相等，则把item的done取反
      if (item.id === id) {
        return { ...item, done: !preDone };
      }
      return item;
    });

    //把修改好的状态再设置回去
    this.setState({ todos: newTodos });
  };

  // 发布新的todo
  addTodo = (newTodo) => {
    const { todos } = this.state;
    this.setState({
      todos: [...todos, newTodo],
    });
  };
}

export default App;
