// 管理store
// 默认数据
const defaultState = {
  todos: [
    { id: Date.now(), content: "抽烟", done: true },
    { id: Date.now() + 1, content: "喝酒", done: false },
    { id: Date.now() + 2, content: "烫头", done: true },
  ],
  mouse: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  // state: 原始仓库里的状态
  // action：action新传递的状态
  // Reducer里只能接受state，不能改变state
  if (action.type === "change_done") {
    // 深度拷贝
    let newState = JSON.parse(JSON.stringify(state));
    newState.todos = action.value;
    return newState;
  }

  // state值只能传递，不能使用
  if (action.type === "add_content") {
    // 深度拷贝
    let newState = JSON.parse(JSON.stringify(state));
    newState.todos = action.value;
    return newState;
  }

  if (action.type === "mouse_flag") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.mouse = action.flag;
    return newState;
  }
  return state;
};
