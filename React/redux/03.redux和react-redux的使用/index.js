/*
 * @Author: your name
 * @Date: 2021-11-05 17:47:46
 * @LastEditTime: 2021-11-06 10:46:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \note\React\redux\src\index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
ReactDOM.render(
  // 在渲染组件的时候，直接套一层Provider组件
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
