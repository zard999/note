import React, { Component } from "react";
import "./index.css";

export default class List extends Component {
  render() {
    const { obj } = this.props;
    let userInfo = [];
    if (obj) {
      ({ userInfo } = obj);
    }
    return (
      <div className="row">
        {userInfo.map((item) => {
          return (
            <div className="card" key={item.id}>
              <a rel="noreferrer" href={item.html_url} target="_blank">
                <img
                  src={item.avatar_url}
                  style={{ width: "100px" }}
                  alt="avatar"
                />
              </a>
              <p className="card-text">{item.login}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
