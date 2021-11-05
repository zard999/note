/*
 * @Author: your name
 * @Date: 2021-11-05 09:43:09
 * @LastEditTime: 2021-11-05 19:15:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \note\React\todolist\src\components\Header\index.jsx
 */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
            <button onClick={this.back}>back</button>
            <button onClick={this.forward}>forward</button>
            <button onClick={this.go}>go</button>
          </div>
        </div>
      </div>
    );
  }

  back = () => {
    console.log(this.props);
    this.props.history.goBack();
  };

  forward = () => {
    this.props.history.goForward();
  };

  go = () => {
    this.props.history.go();
  };
}

export default withRouter(Header);
