import React, { Component } from "react";
import "./index.css";
export default class Item extends Component {
  state = {
    mosue: false,
  };
  render() {
    //拿到List组件传递的当前信息
    const { content, done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        onMouseEnter={this.changeMouse(true)}
        onMouseLeave={this.changeMouse(false)}
        style={{ backgroundColor: mouse ? "#999" : "white" }}
      >
        <label>
          <input type="checkbox" checked={done} onChange={this.changeChecked} />
          <span>{content}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
          onClick={this.deleteCurrent}
        >
          删除
        </button>
      </li>
    );
  }

  changeChecked = (e) => {
    const { done, changeDone, id } = this.props;
    // console.log("changeChecked");

    //调用App的changeDone方法，把自己当前的状态传递过去
    //调用的时候 还要传递当前点击的item的id，方便App组件进行判断当前点的是哪一个
    changeDone(id, done);
  };

  changeMouse = (flag) => {
    return () => {
      this.setState({
        mouse: flag,
      });
    };
  };

  deleteCurrent = () => {
    const { deleteTodo, id } = this.props;
    deleteTodo(id);
  };
}
