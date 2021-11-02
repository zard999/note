import React, { Component } from "react";
import axios from "axios";

export default class Search extends Component {
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            ref={(el) => (this.inpValue = el)}
            type="text"
            placeholder="enter the name you search"
          />
          &nbsp;<button onClick={this.getUserInfo}>Search</button>
        </div>
      </section>
    );
  }

  // 只要开始点击搜索，就不是第一次搜索

  getUserInfo = () => {
    const { value } = this.inpValue;
    const { getUserInfo } = this.props;
    axios
      .get(`https://api.github.com/search/users?q=${value}`)
      .then((res) => {
        const userInfo = res.data.items;
        getUserInfo(userInfo);
      })
      .catch((err) => {
        console.error(err);
      });
  };
}
