#### 表单触发事件

onchange: 表单发生改变并且失去焦点
oninput: 表单发生改变就触发
onkeydown
onkeyup

#### 生命周期

旧生命周期：

- constructor -> componentWillMount -> render -> componentDidMount -> componentWillUnmount
- componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate -render -> componentDidUpdate -> componentWillUnmount

新生命周期：

- constructor -> static getDerivedStateFromProps -> render -> componentDidMount -> componentWillUnmount
- render -> getSnapshotBeforeUpdate -> componentDidUpdate -> componentWillUpdate

#### react 中的 axios

- 如果是页面初始化渲染数据，在 componentDidMount 生命周期函数里写 axios 请求，在 then 方法里面改变 this.setState 状态即可改变状态
