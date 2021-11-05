/*
 * @Author: your name
 * @Date: 2021-11-05 11:03:30
 * @LastEditTime: 2021-11-05 15:13:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editt
 * @FilePath: \note\React\redux\src\index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import store from "./redux/store";

ReactDOM.render(<App />, document.getElementById("root"));

store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
