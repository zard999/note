/*
 * @Author: your name
 * @Date: 2021-11-07 11:59:16
 * @LastEditTime: 2021-11-07 16:00:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \note\React\redux\src\redux\actions.js
 */
import {
  ADD_LIST,
  DELETE_LIST,
  CHANGE_CHECK,
  COMPLETE,
  ALL_CHANGE,
} from "./constants";

export function addListAction(value) {
  return {
    type: ADD_LIST,
    data: value,
  };
}

export function deleteListAction(value) {
  return {
    type: DELETE_LIST,
    data: value,
  };
}

export function handleCheckAction(id, done) {
  return {
    type: CHANGE_CHECK,
    data: { id, done },
  };
}

export function completeAction(value) {
  return {
    type: COMPLETE,
    data: value,
  };
}

export function allChangeAction(value) {
  return {
    type: ALL_CHANGE,
    data: value,
  };
}
