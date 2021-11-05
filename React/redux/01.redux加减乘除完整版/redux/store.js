/*
 * @Author: your name
 * @Date: 2021-11-05 18:05:08
 * @LastEditTime: 2021-11-05 18:05:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \note\React\redux\src\redux\store.js
 */
import { createStore } from "redux";
import countReducer from "./reducers/countReducers/countReducer";
const store = createStore(countReducer);

export default store;
