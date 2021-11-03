import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Index from "./pages/Index";
import Video from "./pages/Video";
import workPlace from "./pages/workPlace";

export default class App extends Component {
  render() {
    return (
      <div className="mainDiv">
        <div className="leftNav">
          <h3>一级导航</h3>
          <ul>
            <li>
              <Link to="/">博客首页</Link>
            </li>
            <li>
              <Link to="/vedio">视频教程</Link>
            </li>
            <li>
              <Link to="/workplace">职场技能</Link>
            </li>
          </ul>
        </div>
        <div className="rightMain">
          <Route path="/" component={Index} />
          <Route path="/vedio" component={Video} />
          <Route path="/workplace" component={workPlace} />
        </div>
      </div>
    );
  }
}
