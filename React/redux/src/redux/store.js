/*
 * @Author: your name
 * @Date: 2021-11-05 15:05:01
 * @LastEditTime: 2021-11-05 16:13:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \note\React\redux\src\redux\store.js
 */
import { applyMiddleware, createStore } from "redux";
import countReducer from "./reducers/countReducer";
import thunk from "redux-thunk";

const store = createStore(countReducer, applyMiddleware(thunk));

export default store;
