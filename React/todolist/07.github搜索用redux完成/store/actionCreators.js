import { USERINFO } from "./actionTypes";

export const getUserInfo = (userInfo) => {
  const obj = {
    userInfo: userInfo,
    isFirst: true,
    isLoading: false,
    newMsg: "",
  };
  return {
    type: USERINFO,
    value: obj,
  };
};
