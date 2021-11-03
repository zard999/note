import React, { Component } from "react";
import PubSub from "pubsub-js";
export default class Search extends Component {
  state = {
    items: [],
    isFirst: true, //保存用户是否第一次请求
    isLoading: false, //是否在加载中
    errMsg: "", //错误信息
  };

  render() {
    const { items, isFirst, isLoading, errMsg } = this.state;
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

  componentDidMount() {
    PubSub.subscribe("updateList", (_, data) => {
      this.setState(data);
    });
  }
}
