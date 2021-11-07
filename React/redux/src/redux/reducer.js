/*
 * @Author: your name
 * @Date: 2021-11-07 12:00:46
 * @LastEditTime: 2021-11-07 16:07:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \note\React\redux\src\redux\reducer.js
 */
import {
  ADD_LIST,
  DELETE_LIST,
  CHANGE_CHECK,
  COMPLETE,
  ALL_CHANGE,
} from "./constants";
import initialState from "./initialState";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // 添加item
    case ADD_LIST:
      return { list: [...state.list, action.data] };

    // 删除item
    case DELETE_LIST:
      const newList = state.list.filter((item) => {
        return item.id !== action.data;
      });
      return { ...state, list: newList };

    // 点击item改变check
    case CHANGE_CHECK:
      const { list } = state;
      list.forEach((item) => {
        if (item.id === action.data.id) {
          item.done = !action.data.done;
        }
      });
      return { ...state, list: list };

    // 删除已完成任务
    case COMPLETE:
      const noList = action.data.filter((item) => {
        return !item.done;
      });
      return { ...state, list: noList };

    // 全选
    case ALL_CHANGE: {
      const { list, all } = state;
      // if (action.item) {
      //   list.forEach((item) => {
      //     if (!item.done) {
      //       item.done = action.item;
      //     }
      //   });
      // }
      return { ...state, all: !all };
    }
    default:
      return state;
  }
}
