<!--
 * @Author: your name
 * @Date: 2021-10-27 09:20:17
 * @LastEditTime: 2021-11-05 10:37:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \note\React\react.md
-->

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

#### 路由

- BrowserRouter 是路由包裹的标签，Router 已经被淘汰
- 在 React 中，是 Link 组件（路由链接）完成路径切换，to 属性是用来切换路径的
- NavLink 可以做导航的路径，相比较 Link 组件来说，多了一些属性，比如 activeClassName 属性，就是当前路由被选中后，使用这个属性中的类型
- route 标签是路由的切换实现，path 属性是用来监听路径，然后路径匹配成功则加载对应的组件,component 属性后跟当前要加载的组件
- 当自定的组件是双标签使用的时候，内容是通过 prop 的 children 属性传递进去的
- 如果在根据路径查找组件的过程中，进入了一个 Switch 组件中，则查到之后，会立马退出当前的 Switch 组件，继续向下走

#### 路由组件和一般组件的区别

- 使用方式不同。一般组件直接用标签去渲染;路由组件依赖路由器进行路径的匹配。
- 存放的文件夹位置不同。一般组件:components;路由组件:pages。
- 接受的 props 参数不同。一般组件:传递什么接受什么;路由组件:收到固定的几个。

#### 编程式路由导航

- props 上的 history 对象上有 push 和 replace 方法，可以进行路由导航
- 参数一是路由地址，参数二是 state 值
- push 和 replace 的区别在于是否存在历史记录

#### 历史记录前进和回退

- 路由组件的 props 上的 history 对象
- withRouter 可以把一般组件作为路由组件使用，拥有固定的 props

#### 默认重定向

- 设置 Redirect 标签中的 to 属性
