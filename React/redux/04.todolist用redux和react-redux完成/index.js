/*
 * @Author: your name
 * @Date: 2021-11-07 11:29:22
 * @LastEditTime: 2021-11-07 15:51:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \note\React\redux\src\index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
