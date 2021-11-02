import React, { Component } from "react";
import "./index.css";
import axios from "axios";

export default class List extends Component {
  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input
              ref={(el) => (this.inpValue = el)}
              type="text"
              placeholder="enter the name you search"
            />
            &nbsp;
            <button onClick={this.search}>Search</button>
          </div>
        </section>
      </div>
    );
  }

  search = () => {
    const { value } = this.inpValue;
    const { getUserInfo } = this.props;

    // 只要开始点击搜索，就代表不再是第一次请求
    getUserInfo({
      items: [],
      isFirst: false,
      isLoading: true,
      errMsg: "",
    });
    axios
      .get(`https://api.github.com/search/users?q=${value}`)
      .then((res) => {
        const userInfo = res.data.items;
        getUserInfo({
          items: userInfo,
          isFirst: false,
          isLoading: false,
          errMsg: "",
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
}
