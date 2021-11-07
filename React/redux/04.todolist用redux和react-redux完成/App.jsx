/*
 * @Author: your name
 * @Date: 2021-11-07 11:29:15
 * @LastEditTime: 2021-11-07 15:24:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \note\React\redux\src\App.jsx
 */
import React, { Component } from "react";
import "./App.css";

import HeaderContainer from "./components/Header";
import MainContainer from "./components/Main";
import FooterContainer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <HeaderContainer />
          <MainContainer />
          <FooterContainer />
        </div>
      </div>
    );
  }
}
