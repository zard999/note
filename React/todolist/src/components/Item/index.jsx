import React, { Component } from "react";
import "./index.css";
export default class Item extends Component {
  render() {
    const { content, id, done } = this.props;
    return (
      <li>
        <label>
          <input type="checkbox" checked={done} />
          <span>{content}</span>
        </label>
        <button className="btn btn-danger" style={{ display: "none" }}>
          删除
        </button>
      </li>
    );
  }
}
