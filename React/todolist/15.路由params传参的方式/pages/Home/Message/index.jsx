import React, { Component } from "react";
import Info from "./Info";
import { Link, Route } from "react-router-dom";

export default class Message extends Component {
  state = {
    message: [
      {
        id: "001",
        name: "naowang",
        age: 18,
        say: "我爱你中国",
      },
      {
        id: "002",
        name: "xiaozhang",
        age: 20,
        say: "我爱你laowang",
      },
      {
        id: "003",
        name: "heihei",
        age: 18,
        say: "我爱你hh",
      },
      {
        id: "004",
        name: "lkik",
        age: 18,
        say: "我爱你dddd",
      },
    ],
  };

  /* 
    params给路由组件传参的方式：
      在路由的地址继续添加params参数
      在Route组件中接受params参数 /:xx/:xx
      在路由组件中，通过this.props.match.params找到传递的参数
   */

  render() {
    const { message } = this.state;
    return (
      <div>
        <ul>
          {message.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  to={`/home/message/info/${item.name}/${item.age}/${item.say}`}
                  href="/message1"
                >
                  message{item.id}
                </Link>
              </li>
            );
          })}
        </ul>
        <Route path="/home/message/info/:name/:age/:say" component={Info} />
      </div>
    );
  }
}
