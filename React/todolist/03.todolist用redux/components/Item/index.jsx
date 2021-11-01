import React, { Component } from "react";
import "./index.css";

// 引入store仓库
import store from "../../store";

export default class Item extends Component {
  state = store.getState();

  storeChange = () => {
    this.setState(store.getState());
  };

  handleMouse = (flag) => {
    return () => {
      const action = {
        type: "mouse_flag",
        flag,
      };
      store.dispatch(action);
    };
  };

  render() {
    const { content, done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        style={{ backgroundColor: mouse ? "#999" : "white" }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input type="checkbox" checked={done} onChange={this.changeChecked} />
          <span>{content}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }

  componentDidMount() {
    store.subscribe(this.storeChange);
  }

  changeChecked = (e) => {
    const { changeDone, done, id } = this.props;
    changeDone(id, done);
  };
}
