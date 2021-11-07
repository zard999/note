/*
 * @Author: your name
 * @Date: 2021-11-07 11:57:08
 * @LastEditTime: 2021-11-07 15:54:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \note\React\redux\src\actions\initialState.js
 */
const initialState = {
  list: [
    { id: Date.now(), hobby: "抽烟", done: true },
    { id: Date.now() + 1, hobby: "喝酒", done: false },
    { id: Date.now() + 2, hobby: "烫头", done: true },
  ],
  all: true,
};

export default initialState;
