import React, { Component } from "react";
import "./index.css";
export default class Item extends Component {
  render() {
    const { content, done } = this.props;
    return (
      <li>
        <label>
          <input type="checkbox" checked={done} onChange={this.changeChecked} />
          <span>{content}</span>
        </label>
        <button className="btn btn-danger" style={{ display: "none" }}>
          删除
        </button>
      </li>
    );
  }

  changeChecked = (e) => {
    const { changeDone, done, id } = this.props;
    changeDone(id, done);
  };
}
