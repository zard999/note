/*
 * @Author: your name
 * @Date: 2021-11-03 19:22:49
 * @LastEditTime: 2021-11-08 20:53:29
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \note\React\hook\src\App.jsx
 */
import React, { Component } from "react";
import UserList from "./components/UserList";

export default class App extends Component {
  render() {
    return (
      <div>
        <UserList />
      </div>
    );
  }
}
