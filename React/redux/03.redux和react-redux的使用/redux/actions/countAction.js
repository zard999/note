/*
 * @Author: your name
 * @Date: 2021-11-05 18:12:59
 * @LastEditTime: 2021-11-06 11:07:30
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \note\React\redux\src\redux\actions\countAction.js
 */
import { DECREMENT, INCREMENT } from "../types/countType";

export const createIncrementAction = (value) => {
  return {
    type: INCREMENT,
    data: value,
  };
};

export const createDecrementAction = (value) => {
  return {
    type: DECREMENT,
    data: value,
  };
};

export const createIncrementAsyncAction = (value) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: INCREMENT,
        data: value,
      });
    }, 1000);
  };
};
