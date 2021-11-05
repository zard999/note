/*
 * @Author: your name
 * @Date: 2021-11-05 19:26:55
 * @LastEditTime: 2021-11-05 19:37:51
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \note\React\redux\src\redux\actions\countAction.js
 */
import { PLUS_ONE, MINUS_ONE, CUSTOM_COUNT } from "../types/countType";

export const createPlusOneAction = () => {
  return {
    type: PLUS_ONE,
  };
};

export const createMinusOneAction = () => {
  return {
    type: MINUS_ONE,
  };
};

export const createCustomCountAction = (count) => {
  return {
    type: CUSTOM_COUNT,
    payload: { count },
  };
};
