/*
 * @Author: your name
 * @Date: 2021-11-05 15:21:47
 * @LastEditTime: 2021-11-05 16:11:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \note\React\redux\src\redux\actions\count_action.js
 */
import { INCREMENT, DECREMENT } from "../constant";

export const createIncrementAction = (value) => {
  return {
    type: INCREMENT,
    value,
  };
};

export const createDecrementAction = (value) => {
  return {
    type: DECREMENT,
    value,
  };
};
