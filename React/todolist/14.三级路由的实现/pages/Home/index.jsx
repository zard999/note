import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import News from "./News";
import Message from "./Message";
import MyLink from "../../components/MyLink";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyLink to="/home/news">News</MyLink>
            </li>
            <li>
              <MyLink to="/home/message">Message</MyLink>
            </li>
          </ul>
          <div>
            <Switch>
              <Route path="/home/news" component={News} />
              <Route path="/home/message" component={Message} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
