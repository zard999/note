import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Money from "./Money";
import Getup from "./Getup";

export default class index extends Component {
  render() {
    return (
      <div>
        <div className="topNav">
          <ul>
            <li>
              <Link to="/workplace/money">程序员加薪秘籍</Link>
              <Link to="/workplace/getup">程序员早起攻略</Link>
            </li>
          </ul>
        </div>
        <div className="videoContent">
          <div>
            <h3>职场软技能</h3>
          </div>
          <Route path="/workplace/money" component={Money} />
          <Route path="/workplace/getup" component={Getup} />
        </div>
      </div>
    );
  }
}
