/*
 * @Author: your name
 * @Date: 2021-11-05 19:19:34
 * @LastEditTime: 2021-11-05 19:50:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \note\React\redux\src\components\index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
ReactDOM.render(<App />, document.getElementById("root"));

store.subscribe(() => {
  console.log(store.getState());
});
