/*
 * @Author: your name
 * @Date: 2021-11-09 16:54:08
 * @LastEditTime: 2021-11-09 17:51:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \note\移动端\mobile\src\config\ajax.js
 */
import axios from "axios";
// 进度条
import NProgress from "nprogress";
import "nprogress/nprogress.css";

axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    NProgress.start();
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    // Do something before response is sent
    NProgress.done();
    return response.data;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export const getVerifyCode = (value) => {
  return axios.post("/login/digits", {
    phone: value,
  });
};

export const getLoginCode = (phone, code) => {
  return axios.post("/login/phone", {
    phone,
    code,
  });
};

export const verifyUserState = () => {
  return axios.post("/login/verify");
};

export const userOut = (_id) => {
  return axios.post("logout", {
    _id,
  });
};
