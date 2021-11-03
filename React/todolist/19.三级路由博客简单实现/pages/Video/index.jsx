import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import ReactPage from "./ReactPage";
import Flutter from "./Flutter";
import Vue from "./Vue";

export default class Video extends Component {
  render() {
    return (
      <div>
        <div className="topNav">
          <ul>
            <li>
              <Link to="/video/reactpage">reactpage教程</Link>
            </li>
            <li>
              <Link to="/video/flutter">flutter教程</Link>
            </li>
            <li>
              <Link to="/video/vue">vue教程</Link>
            </li>
          </ul>
        </div>
        <div className="videoContent">
          <div>
            <h3>视频教程</h3>
          </div>
          <Route path="/video/reactpage" component={ReactPage} />
          <Route path="/video/flutter" component={Flutter} />
          <Route path="/video/vue" component={Vue} />
        </div>
      </div>
    );
  }
}
