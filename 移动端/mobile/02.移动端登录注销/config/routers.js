/*
 * @Author: your name
 * @Date: 2021-11-09 15:17:57
 * @LastEditTime: 2021-11-09 15:26:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \note\移动端\mobile\src\config\routers.js
 */
import UserCenter from "../components/UserCenter";
import Login from "../components/Login";
export const HomeRouters = [
  { path: "/login", component: Login },
  { path: "/userCenter", component: UserCenter },
];
