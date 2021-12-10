<!--
 * @Author: your name
 * @Date: 2021-10-27 09:20:17
 * @LastEditTime: 2021-11-10 15:28:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \note\React\react.md
-->

#### 表单触发事件

onchange: 表单发生改变并且失去焦点
oninput: 表单发生改变就触发
onkeydown: 键盘只要按下就会触发 获取不到最新输入的那个字母
onkeyup：键盘按下再抬起才会触发 获取所有的数据 包括最新输入的内容

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
- 存放的文件夹 s 位置不同。一般组件:components;路由组件:pages。
- 接受的 props 参数不同。一般组件:传递什么接受什么;路由组件:收到固定的几个。

#### 路由传值的方式

- params：在路由的地址后继续添加 params 参数,在 Route 组件中接受 params 参数 /:xx/:xx,在路由组件中，通过 this.props.match.params 即可拿到传递的信息
- search(用 qs 插件): to 属性里面写对象,对象的 pathname 写路径,search 写 qs.stringify(item)
- state: to 属性里面也是写对象,对象里的 state 直接写当前 item

#### 编程式路由导航

- 路由组件的 props 上的 history 对象上有 push 和 replace 方法，可以进行路由导航
- 参数一是路由地址，参数二是 state 值
- push 和 replace 的区别在于是否存在历史记录

#### withRouter

- withRouter 方法可以把一般组件变成路由组件拥有固定的 props 属性值

#### 历史记录前进和回退

- 路由组件的 props 上的 history 对象 中 有 goForward 和 goBack 和 go 等方法

#### 默认重定向

- 设置 Redirect 标签中的 to 属性为默认的路由路径

#### redux

1. 创建一个 store 对象：将 state、action、reducer 联系在一起的对象
   - import {createStore} from 'redux'
   - import reducer from './reducers'
   - const store = createStore()
2. 此对象的功能：
   - store.getState(): 得到 state
   - store.dispatch(action): 分发 action，触发 reducer 调用，产生新的 state
   - store.subscribe(listener): 注册监听，当产生新的 state 时，自动调用

#### 异步 action

- 异步 action 函数必须返回一个函数，并且函数是让 store 调用的，但是 store 还是希望这个函数中有 dispatch，否则无法和 reducer 联系
- 必须引入 redux-thunk 中间件，createStore 中第二个参数填 applyMiddleware(thunk),store 才能执行函数
- 在 store 调用异步 action 返回的函数时，就已经传入 dispatch 方法，所以不需要重新获取，给函数传个形参即可

#### react-redux

容器组件和 UI 组件

1. 创建 container 文件夹用来放容器组件，引入 UI 组件，通过 connect 创建容器组件和用来连接 UI 组件的 redux。 const countContainer = connect(mapStateToProps, mapDispatchToProps)('UI 组件')
2. connect 方法的第一个参数函数，当 react-redux 调用这个函数的时候，会直接传入当前 store 中的 state 状态值
3. connect 方法的第二个参数函数，当 react-redux 调用这个函数的时候，会直接传入 dispatch 作为参数
4. mapDispatchToProps 可以简写 const mapDispatchToProps = {
   increment: createIncrementAction,
   }
5. 容器组件和 UI 组件和写在一起

#### hook 中的常见方法

- useState: 让函数组件具有维持状态的能力(管理 state)
  - useState(initialState)的参数时创建 state 的初始值，它可以是任意类型，比如数字、对象、数组等等
  - useState()的返回值是一个有着两个元素的数组。第一个数组元素用来读取 state 的值，第二个则是用来设置这个 state 的值。注意，state 的变量是只读的，只能通过数组的第二个参数来设置它的值
  - 如果要创建多个 state，那么我们就需要多次调用 useState
  - state 中永远不要保存可以通过计算得到的值
- useEffect：指向副作用，副作用是指一段和当前执行结果无关的代码，如修改函数外部的某个变量，要发起一个请求等等。useEffect 中代码的执行是不影响渲染出来的 UI 的
  - 每次 render 后执行：不提供第二个依赖性参数。比如，useEffect(() => {})
  - 仅第一次 render 后执行：提供一个空数组作为依赖性。比如，useEffect(() => {}, [])
  - 第一次以及依赖性发生变化后执行：提供依赖项数组。比如，useEffect(() => {}, [deps])
  - 组件 unmount 后执行：返回一个回调函数。比如，useEffect(() => { return () => {} }, [])
- useCallback: 缓存回调函数，只有当 count 发生变化时，我们才需要重新定义一个回调函数
  - useCallback(fn,deps)：fn 是定义的回调函数，deps 是依赖的变量数组
- useMemo: 缓存计算的结果:
  - useMemo(fn, deps)
  - useCallBack 的功能其实是可以用 useMemo 来实现的：返回一个函数作为缓存结果
  - useCallback 和 useMemo 只做了同一件事情：建立了一个绑定某个结果到依赖数据的关系。只有当依赖变了，这个结果才需要被重新得
- useRef：在多次渲染之间共享数据
  - const myRef = useRef(initialValue)
  - 可以使用 useRef 来清除计时器
  - 保存某个 DOM 节点的引用：获取真实 DOM，通过 inputEl.current 就能访问到真实 DOM
- useContext：定义全局状态
  - 现在根组件上创建一个 Context：const MyContext = React.createContext(initialValue); => 具有 Provider 属性
  - const value = useContext(MyContext)
  - 会让调试变得困难，因为你很难跟踪某个 Context 的变化究竟是如何产生的
  - 会让组件的复用变得困难，因为一个组件如果使用了某个 Context，它就必须确保被用到的地方一定有这个 Context 的 Provider 在其父组件的路径上

#### hook 必须避免的错误

1. 在 useEffect 的回调函数中使用的变量，都必须在依赖项中声明
2. Hooks 不能出现在条件语句或者循环中，也不能出现在 return 之后
3. Hooks 只能在函数组件或者自定义 Hooks 中使用
4. ESLint 插件：npm i eslint-plugin-react-hooks -D

```ESLint
{
   "plugins": [
      // ...
      "react-hooks"
   ],
   "rules": {
      // ...
      // 检查Hooks的使用规则
      "react-hooks/rules-of-hooks": "error",
      // 检查依赖性的声明
      "react-hooks/exhaustive-deps": "warn"
   }
}
```
