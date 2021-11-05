import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MyLink extends Component {
  render() {
    const { to, children } = this.props;
    return (
      <NavLink
        to={to}
        className="list-group-item"
        activeClassName="active"
        href="./about.html"
      >
        {children}
      </NavLink>
    );
  }
}
