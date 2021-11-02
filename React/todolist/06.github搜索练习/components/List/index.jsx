import React, { Component } from "react";

export default class Search extends Component {
  render() {
    const { items, isFirst, isLoading, errMsg } = this.props.state;
    return (
      <div className="row">
        {isFirst ? (
          <h2>欢迎使用github搜索功能</h2>
        ) : isLoading ? (
          <h2>正在加载中</h2>
        ) : errMsg ? (
          <h1>{"errMsg"}</h1>
        ) : (
          items.map((item) => {
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
          })
        )}
      </div>
    );
  }
}
