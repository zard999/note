/*
 * @Author: your name
 * @Date: 2021-11-05 18:07:07
 * @LastEditTime: 2021-11-05 18:21:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \note\React\redux\src\redux\reducers\countReducers\countReducer.js
 */
import { INCREMENT, DECREMENT } from "../../types/countType";
export default function countReducer(state = 0, action) {
  console.log(state, action);
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
