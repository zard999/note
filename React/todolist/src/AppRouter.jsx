import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from "./components/Index";
import List from "./components/List";

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/list/123">列表</Link>
          </li>
        </ul>
        {/* 路由传值：(:id) */}
        <Route path="/" exact component={Index} />
        <Route path="/list/:id" component={List} />
      </Router>
    );
  }
}
