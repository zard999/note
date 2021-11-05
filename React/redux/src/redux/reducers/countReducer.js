/*
 * @Author: your name
 * @Date: 2021-11-05 15:06:10
 * @LastEditTime: 2021-11-05 15:47:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \note\React\redux\src\redux\countReducers\countReducer.js
 */
import { INCREMENT, DECREMENT } from "../constant";
export default function countReducer(state = 0, action) {
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return state + data;
    case DECREMENT:
      return state - data;
    default:
      return state;
  }
}
