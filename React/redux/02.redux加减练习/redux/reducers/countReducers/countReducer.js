/*
 * @Author: your name
 * @Date: 2021-11-05 19:33:34
 * @LastEditTime: 2021-11-05 19:49:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \note\React\redux\src\redux\reducers\countReducers\countReducer.js
 */
import { PLUS_ONE, MINUS_ONE, CUSTOM_COUNT } from "../../types/countType";

const initialState = { count: 0 };

export default function countAction(state = initialState, action) {
  switch (action.type) {
    case PLUS_ONE:
      return { count: state.count + 1 };
    case MINUS_ONE:
      return { count: state.count + 1 };
    case CUSTOM_COUNT:
      return {
        count: state.count + action.payload.count,
      };
    default:
      return state;
  }
}
