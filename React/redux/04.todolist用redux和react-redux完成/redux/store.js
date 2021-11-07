// 创建store
// 引入createStore创建方法
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

export default store;
