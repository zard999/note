// 引入createStore方法
import { createStore } from "redux";
import reducer from "./reducer";

// 创建数据存储仓库
const store = createStore(
  reducer,
  // 看window里有没有这个方法，有则执行
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
