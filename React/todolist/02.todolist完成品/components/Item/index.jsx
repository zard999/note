import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  state = {
    mouse: false,
  };
  render() {
    const { item, index, deleteItem } = this.props;
    return (
      <li
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
        style={{ backgroundColor: this.state.mouse ? "#999" : "white" }}
      >
        <label>
          <input
            type="checkbox"
            checked={item.done}
            onChange={this.changeCheck}
          />
          <span>{item.content}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: this.state.mouse ? "block" : "none" }}
          // 绑定删除事件，将index传参进去
          onClick={deleteItem(index)}
        >
          删除
        </button>
      </li>
    );
  }

  // 改变check
  changeCheck = (e) => {
    const { changeDone, item } = this.props;
    // 将item的id和done传给changeDone函数
    changeDone(item.id, item.done);
  };

  // 鼠标悬浮效果
  handleMouse = (flag) => {
    return () => {
      this.setState({
        mouse: flag,
      });
    };
  };
}
