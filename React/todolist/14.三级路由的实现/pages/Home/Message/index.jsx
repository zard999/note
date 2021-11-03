import React, { Component } from "react";
import Info from "./Info";
import { Link, Route } from "react-router-dom";

export default class Message extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/home/message/info" href="/message1">
              message001
            </Link>
            &nbsp;&nbsp;
          </li>
          <li>
            <Link to="/home/message/info" href="/message1">
              message002
            </Link>
            &nbsp;&nbsp;
          </li>
          <li>
            <Link to="/home/message/info" href="/message1">
              message003
            </Link>
            &nbsp;&nbsp;
          </li>
        </ul>
        <Route path="/home/message/info" component={Info} />
      </div>
    );
  }
}
