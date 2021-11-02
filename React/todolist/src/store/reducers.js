import { USERINFO } from "./actionTypes";
// 默认数据
const defaultState = {};

// 就是一个方法函数
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  // 如果type符合
  if (action.type === USERINFO) {
    let newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
    newState.obj = action.value;
    return newState;
  }
  return state;
};
