## 指令



- `v-bind`：v-bind:href || :href（增加标签原有属性的功能）
  - `.sync`：语法糖，让父组件可以监听事件并根据需要更新一个本地的数据property	（this.$emit('update:title')）    v-bind+ 自定义事件
- `v-model`：v-model="msg" (双向数据绑定，只能用于表单当中) 
  修饰符：lazy：失去焦点或按下回车才更新数据、trim（去除前后空格）、number（调用parseFloat方法） 
- `v-on`：@click="say('参数', $event)" （用于标签的事件注册，事件处理程序不能写成箭头函数）
  1. 事件修饰符：`.self`：只有自己被触发才会执行，通过冒泡或是捕获都不会触发、`.once`：只会触发一次，触发完移除事件、`.stop`、`.prevent`、`.capture`、`.passive` 修饰符尤其能够提升移动端的性能。
  2. 键盘事件：.enter、.tab、.delete、.space、.ese：取消键、.up、.down、.left、.right。
- `v-for`:  v-for='(item,index) in list' || v-for='(item,key,index) in obj' || v-for='item in 10'	key要用唯一的值，不要用index
- `v-if`：根据表达式的值的真假条件，销毁或重建元素。
- `v-show`（经常用）：根据表达式之真假值，切换元素的 display CSS 属性。
- `v-else`和`v-else-if`指令用于指定其他的条件，需要配合v-if使用。
- `v-text`（很少用）: v-text='msg' : 更新元素的 `textContent`。
- `v-html`（不要用，会有xss攻击风险）: v-html='msg' : 更新DOM对象的 innerHTML,html标签会生效。
- `v-pre`（尽量不用）: 跳过这个元素和它的子元素的编译过程，跳过大量没有指令的节点会加快编译。
- `v-once`: 只出现一次。
- `v-cloak`（几乎不用）: style表里写：[v-cloak]{display:none}: js文件没加载出来之前隐藏标签。
- `:class`='{active: isShow}（对象写法最常用）。
- `:style`="{color: 'red',fontSize: size+ 'px'}" || :style="{styleObject}"  data:{styleObject:{color: 'red}}。
- 自定义指令（`directives`）：1. 指令名字只能是全小写；2. 指令名字不带v- ， v-后面的才是指令名字。3. 钩子函数：bind（只调用一次）、inserted（页面渲染完成之后）、update（更新时调用）

## 计算和侦听器和过滤器属性

- 计算属性（`computed`）：计算属性是只读属性（会缓存计算后的数据，只计算一次，可以多次使用）。减少模板中计算逻辑、数据缓存、依赖固定的数据类型。
- 过滤器（`filter`）：可以对已有的数据进行额外的处理，比如文本格式处理、将普通字符串换成大写（vue3已经废弃）
- 侦听器（`watch`）：监视哪个数据就写哪个数据 待监视的数据是data中的数据。watch中可以执行任何逻辑，如函数节流，Ajax异步获取数据，甚至操作DOM

1. 简单写法：只写对应数据的监听函数。
2. 复杂写法：写成对象形式，逻辑必须放到handler函数中，deep:true(监视复杂数据类型这个必须开启)，immediate:true（表示一开始渲染就要执行hander函数中的代码）。
3. 只要是vm上的数据或是VueComponent上的数据，都可以监听。

- 面试题（Vue的computed和watch的区别 || 实现原理 || 使用场景）：

  **区别：**

  ```javascript
  1. computed是模板表达式的声明式描述，会创建新的响应式数据。而watch是响应式数据的自定义侦听器，用于响应数据的变化。
  
  2. computed具有可缓存、可以依赖多个属性、getter函数无副作用等特点。而watch则更适用于异步或者开销大的操作。
  
  3. computed等同于为属性设置getter属性，也可以设置setter，但是大部分情况会设置getter。而watch等同于为属性的setter函数设置回调函数、监听深度deep及响应速度immediate。
  ```

  

## 生命周期钩子函数



- `beforeCreate`：初始化开始：生命周期、事件，但事件代理还未开始。此时，无法通过vm访问到data中的数据、methods中的方法。
- `Created`：初始化完成：数据监测、数据代理。可以通过vm访问到data中的数据、methods中的方法。
- `beforeMoute`：1. 页面呈现的是未经Vue编译的DOM结构。2. 所有对DOM的操作，最终都不奏效。
- `Mouted（常用）`：跟上面两点相反（尽可能避免DOM操作），一般在此进行：开启定时器、发送ajax请求、订阅消息、绑定自定义事件等初始化操作。
- `beforeUpdate`：不可移除更改依赖数据，数据是新的，但页面时旧的。即：页面尚未和数据保持同步。
- `updated`: 数据是新的，页面也是新的，即：页面和数据保持同步。（只有改变的数据在页面中显示，更新数据才会触发updated）
- `beforeDestroy（常用）`：一般在此阶段：关闭定时器、取消订阅消息、解绑自定义事件等收尾操作。
- `destroyed（很少用）`：组件真的被销毁了。

## slot插槽

- 单个插槽 | 匿名插槽：父组件之间放值，在子组件插入<slot></slot>
- 后备内容：slot中可以设置默认值，父组件不传值就显示默认值
- 具名插槽：多个slot子组件添加name属性做区分，父组件必须在template标签中绑定v-slot:name传值，name一定不能用引号，也可以简写，#name

```js
<template v-slot:header>hhh</template>

<slot name='header'></slot>
```



- 作用域插槽(子传父)：父组件放data里面的数据也可以

```js
<template v-slot='aaa'>{{aaa}}</template>
// aaa就是{money:200,brand:'长城'}
<slot money="200" brand="长城"></slot>

// 具名的基础上传了个参数，看着高级点
<template v-slot:user='bbb' >{{bbb}}</template>
// bbb就是{user:{name:'hhh'}}
<slot name="user" user="{name: 'hhh'}" ></slot>
```





## 组件



### 全局组件

`Vue.component`：组件实例对象（VueComponent构造函数）是Vue.prototype的子集。

Vue.component(''名称', {template：`<div></div>`})。

```javascript
1. 组件名称不能和原有标签重名。

2. 组件中的data必须是一个函数，且返回一个对象。

3. 组件中的参数和原来一样(除了el)。

4. 组件中一定要有一个根标签.
```



### 父传子

```javascript
1. 父组件中有数据保持在data中。

2. 在父组件中的嵌套子组件中添加自定义活动属性，将属性值赋值给自定义的活动属性。

3. 在子组件中要使用props来接收父组件传递过来的数据 ，props是一个数组。

4. props就相当于是组件中的data，原来数据如何渲染现在就如何渲染。
```

**注意：props负责获取父组件传递过来的数据，props中的值是只读的，不允许修改**。



### 子传父

```javascript
1. 父组件给子组件注册一个自定义事件。

2. 子组件触发这个自定义事件，触发事件时把数据传递给父组件。
```



### 子传父的优化$emit

```javascript
1. 在父组件的模板子组件上书写**自定义事件**，填入函数。

2. **注意**是在子组件中调用`$emit()`，第一个参数是`父组件的模板中子组件上的自定义事件`,第二个参数是要传递的数据。

3. this.$emit方法返回值为this，如果需要返回值可以使用回调函数，最后一个参数就是回调函数。

4. 注意：`父组件的模板中子组件上的自定义事件名字`是什么，`$emit()`第1个参数的名字就是什么。
```

### 子传父$emit()+ref

```javascript
1. 子组件准备数据，子组件上定义ref属性

// 父组件在mounted生命周期方法上给子组件绑定事件，
2. this.$refs.get.on('getDate', this.getDate) 

3. 子组件通过`this.$emit(事件名，要传的值)`的方式来触发并传值
```



### 事件总线

> event bus 称为事件总线，多用于组件之间的通讯，比如非父子组件

```javascript
1. const bus = new Vue()  // 准备一个空的vue实例。

// 组件A触发bus的一个事件，触发的时候需要传递参数过去：
2. bus.$emit("send", this.msg)。

// 组件B去给bus注册一个事件，组件B需要提供事件处理程序(函数)：
3. bus.$on("send", (value)=>{})  // this应该指向当前组件，所以要用箭头函数。
```



### 全局事件总线GlobalEventBus

```javascript
// 在main.js入口文件中注册
1. beforeCreate(){
	// 注册全局事件总线
	Vue.prototype.$bus = this
} 

// 在兄弟组件中，给全局事件对象注册一个事件处理程序
2.mounted(){ this.$bus.$on('getDate', (value)=>{}) }

// **在另一个兄弟组件准备数据，并通过全局事件对象触发它兄弟的事件**
3. this.$bus.$emit('getDate', this.value)

// 一定要记得在组件销毁之前，解绑事件总线上的自定义事件
4. beforeDestroy() {
	// 单独销毁
    this.$bus.$off("getDate");
    // 全部销毁
    this.$bus.off()
  },
```



#### 组件中name的作用

```js
1. name名称会呈现在浏览器的vue插件中。
```







## 全局API



- `Vue.set（vm.$set(别名)）`: 动态绑定数据，并且是响应式（对象或数组）。
- `Vue.delete`：动态删除数据，并且是响应式（对象或数组）。
- `Vue.nextTick（解决异步更新问题）`：在DOM未更新时拿到最新的数据。
- `Vue.extend`

## 本地存储

### vue中的本地存储

1. 只要页面中的数据发生了变动，都应该时时的更改到本地存储当中，用本地存储来管理对应的数据。
2. 因此应该使用侦听属性监听页面中数据的变化，所以需要在`watch`中添加深度监视。

```javascript
watch: {
			todoList: {
				handler(newValue) {
					// newValue就是变化后的数据
					// 将数据存储到本地存储当中
					// localStorage中的值一定是字符串类型
					localStorage.setItem('todoList',JSON.stringify(newValue))
				},
				deep:true // 添加deep 开启真正的深度监视
			}
		}
```

3. 页面一开始打开的时候，是需要从本地存储当中获取数据来渲染到页面上，所以todoList位置 也要改一下 。

   ```javascript
   data: {
   			// todoList: [
   			// 	{ id: 1, name: '滑雪', done: false },
   			// 	{ id: 2, name: '游泳', done: true },
   			// 	{ id: 3, name: '打球', done: false }
   			// ],
   			todoList:JSON.parse(localStorage.getItem('todoList')),
   		},
   ```


### Vuex中的本地存储

####  1.使用vuex-persistedstate默认存储到localStorage

- 引入及配置：在`store`下的`index.js`中

  ```js
  import createPersistedState from "vuex-persistedstate"
  const store =newVuex.Store({
   state: {},
   mutations: {},
   actions: {},
   plugins: [createPersistedState()]
  })
  ```



#### 2. 使用vuex-persistedstate存储到sessionStorage

- 引入及配置：在`store`下的`index.js`中

  ```js
  import createPersistedState from "vuex-persistedstate"
  const store = newVuex.Store({
     state: {},
     mutations: {},
     actions: {},
     plugins: [createPersistedState({
   
         storage:window.sessionStorage
     })]
  })
  ```



#### 3.使用vuex-persistedstate指定需要持久化的state

- 引入及配置：在`store`下的`index.js`中

```js
import createPersistedState from "vuex-persistedstate"

const store = newVuex.Store({
 state: {},
 mutations: {},
 actions: {},
 plugins: [createPersistedState({
 storage:window.sessionStorage,
     reducer(val)  {
         return {
             // 只储存state中的token
             assessmentData: val.token
         }
     }
 })]

}）
```

#### 4.main.js中使用

```js
new Vue({
  store,
  computed: mapState(["todoList"]),
  watch: {
    todoList: {
      deep: true,
      handler(newValue) {
        localStorage.setItem("todoList", JSON.stringify(newValue));
      },
    },
  },
  render: (h) => h(App),
}).$mount("#app");
```



## props属性

1. 作用：用于父子组件间传值

2. 数据类型：Array | Object 如果是对象则可以进行高级配置

3. 对象高级配置

   ```javascript
   <script>
     export default {
       name: "Hello",
       props:{
         msg:{
           type:String,  // 数据类型
           required:true, // 是否必须
           default: 'a'   // 默认值
         },
         num:{
           type:Number,
           // required:true,
           default:0,
           validator:function(value){ // 定义验证规则
             return value > 0
           }
         },
         car:{
           type:Object,
           required:true
         }
       }
     };
   </script>
   ```

   

4. inheritAttrs: 可以取消原生元素的默认挂载



##  ref属性

1. 操作真实DOM， 在初始化渲染时是无法操作的。
2. 在HTML元素中，添加ref属性，然后再JS中通过vm.$refs属性获取。
3. 如果获取的是一个子组件，那么通过ref就能获取到子组件中的data和methods。



## 单向数据流

父组件中数据的更新会流动到子组件，也就是说父组件中的数据发生了变化的，子组件接收到的props会自动更新，不能通过子组件

1. 简单数据类型修改会报错
2. 复杂数据类型是引用的地址，修改里面的内容虽然不会报错，但是不推荐，修改引用依然会报错。

## 自定义插件

1. 新建一个插件对象
2. MyPlugin.install = function (Vue, options) { //第一个参数为Vue的构造函数}
3. 用插件：Vue.use(MyPlugin) `vue声明使用插件，本质是在调用插件里面install方法，install方法是为了给Vue添加资源，包括静态方法和原型方法`

## Vuex

### 核心概念

- state: 提供一个响应式数据，this.$store.state.xxx     (取值)
- mutation(不能写异步)：更改state方法，this.$store.commit('方法',  xxx)      (赋值)
- actions：可以执行异步方法 ，必须通过commit触发mutation方法，this.$store.dispatch('方法')    (赋值)
- getter：借助Vue的计算属性computed来实现缓存，this.$store.getters.方法        (取值)
- module：Vue.set 动态添加state到响应式数据中
- mapState：当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 `mapState` 辅助函数帮助我们生成计算属性，让你少按几次键。

```javascript
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from 'vuex'

computed:{
    
	...mapState(["todoList"]),    
}
```



- mapGetters：在computed当中可以获取根据state计算的数据， 映射获取到getters的方法。

- mapMutations：在组件方法当中可以直接代替commit更改数据，映射获取到mutations的方法。

- mapActions：在组件方法当中可以直接代替dispatch提交操作，映射获取到actions的方法。

  1. ...mapActions(['decrement','incrementIfOdd','incrementAsync']),  名字相同可以映射

  2. ...mapActions({'increment':'iincrement'})  名字不同需要这样映射



### 基本步骤

**在src路径下创建store文件夹，然后创建index.js文件**

```javascript
import Vue from "vue"
// 引入vuex
import Vuex from "vuex";

// 挂载
Vue.use(Vuex);

// 注册并暴露仓库
export default new Vuex.Store({
  // 状态
  state: {
    count: 0,
  },
  
  // 执行方法的mutations
  mutations: {
    // 第二个参数可以传值
    increment(state, num) {
      state.count += num;
    },
  },

  // 异步执行
  actions: {
    increment({ commit }) {
      setTimeout(() => {
        commit("increment", 3);
      }, 1000);
    },
  },

  // 计算属性
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
    
  modules:{}
}

// 组件用this.$store调用即可
                              
                              
                              
**
 * 使用Vuex对项目进行管理的基本步骤
 * 1. 在项目中下载Vuex  npm i vuex
 * 2. 在main.js中引入Vuex
 * 3. 注册Vuex  Vuex.use(Vuex)
 * 4. 在当前项目的src文件夹下面新建一个store文件夹  并新建index.js
 * 5. 在index.js文件中去初始化 Vuex实例
 * 6. 将store引入到main.js中 并和vm进行关联
 */
```

![vuex运行机制](https://cdn.jsdelivr.net/gh/zard999/zard999-imgs/images/vuex%E8%BF%90%E8%A1%8C%E6%9C%BA%E5%88%B6.png)

![vuex运行步骤](https://cdn.jsdelivr.net/gh/zard999/zard999-imgs/images/vuex%E8%BF%90%E8%A1%8C%E6%AD%A5%E9%AA%A4.png)

## router

### 是什么？

- 是一个key:value的映射关系	前台路由路径和要显示的组件

```js
{
	path:'/home',
     name: home,
	component: ()=>
    	import('./views/Home/Home.vue'),
    children: [{},{},{}]
}
```



- 当点击链接的时候，路径会发生变化，但是不会向服务器发普通请求，而是去显示对应的组件



### 怎么做？

1. 拆分页面定义组件：路由组件和非路由组件
2. 路由器注册路由组件（注册组件）及使用：

```json
1. 安装router
2. 引入import
3. export暴露
4. Vue.use()使用创建
5. 注入router
```



3. 使用路由实现组件切换：

   > router-link    路由连接，就是点哪，可以让你的路径变为你指定的 to
   > router-view    路由组件显示区域，就是组件需要在哪显示



### 路由传参

#### 步骤：

1. 把参数写在路径当中   （三种）
2. 点击路由链接的时候，路径会去路由器当中的路由当中匹配，匹配同时会把参数解析添加到路由对象当中
3. 匹配成功，显示对应的路由组件同时把当前的路由对象传递到路由组件当中，我们就可以从路由对象当中获取参数



#### 方式：

1. 最原始的传参：

> 参数：params参数,是属于路径的一部分    /message/10	接收：path: '/message:id'
> query参数路径后使用?去拼接起来的    /xxx/  ? aa = bb && xx = yy  

2. 路由链接组件传递数据给命名路由：

> 路由链接组件中给路由传参可以写成对象形式，前提需要给路由起名字name，也叫命名路由		子组件：:to={name: 'detail', query{id: 1}}

3. 使用props简化路由传参给子组件操作（路由当中传参的三种操作）:

   - 布尔值：路由当中需要配置 props:true,只能接收params参数，它会把路由当中接收的参数，置为子组件的属性。
   - 对象：很少用，只能给子组件传递默认静态值。
   - 函数：用的比较多，比较灵活，可以把params和query的参数都映射为子组件的属性。

   ```js
   props(route){ 
       // route就是当前我这个路由对象
       // 把路由对象当中的参数，不管什么参数
       // 全部拿到作为子组件的属性去使用
       return {
           msgId:route.params.msgId,
           msgContent: route.query.msgContent
       }
   }
   
   最终写法：props: $route=>({...$route.query, author: 'zyh'})
   ```

4. 编程式导航传参

```js
// 写path必须用query，name的话params和query都可以用
this.$router.push({
	path: '/user',
	query:{
		id: 1
	}
})
```

### 编程式导航和声明式导航

**某些特定的场合下：编程式导航比声明式导航效率要高**

- `$route`存储着当前路由信息
- `$outer`是整个应用的路由器 

```js
this.$router.push(path): 相当于点击路由链接(可以返回到当前路由界面)
this.$router.replace(path): 用新路由替换当前路由(不可以返回到当前路由界面)
this.$router.back(): 请求(返回)上一个记录路由
this.$router.go(-1): 请求(返回)上一个记录路由
this.$router.go(1):  请求下一个记录路由
```

- $router.push()和$router.replace()的区别：返回有区别。
- $router.push()是往历史记录里面追加
- $router.replace()每一次都是覆盖添加
- router-link默认开启push模式，如想换replace模式，直接加replace属性即可




### 路由组件和非路由组件

- 非路由组件：直接写组件标签，本质是实例化了一个对象，称作组件对象



### 缓存路由组件

**使用这个东西可以保证我们在切换组件的时候，原来显示的组件不被销毁**

```js
// Home是对应的组件对象的名字，不是路由的名字
// 如果想特定保留某个组件的话，则需要使用include属性，值是组件名称
<keep-alive include="Home"> 
    <router-view></router-view>
</keep-alive>
```



### 两种模式

#### hash模式

- 路径中带#: http://localhost:8080/#/home/news
- 发请求的路径: http://localhost:8080/  项目根路径
- 响应: 返回的总是index页面  ==> path部分(/home/news)被解析为前台路由路径
- 开启：默认

#### history模式

- 路径中不带#: http://localhost:8080/home/news
- 发请求的路径: http://localhost:8080/home/news
- 响应: 404错误
- 开启：mode: 'history'



- 希望: 如果没有对应的资源, 返回index页面, path部分(/home/news)被解析为前台路由路径

  ```js
  解决: 添加配置
  
  devServer添加: historyApiFallback: true, // 任意的 404 响应都被替代为 index.html
  
  output添加: publicPath: '/', // 引入打包的文件时路径以/开头
  ```



![router原理](https://cdn.jsdelivr.net/gh/zard999/zard999-imgs/images/router%E5%8E%9F%E7%90%86.png)



### props

- 布尔：会把路由传递的params参数映射为组件内部的属性。
- 对象：会把对象内部的属性映射为组件内部的属性，一般用来传递一个额外的参数。
- 函数：可以手动的映射params或者query参数。

## SPA单页面 的流程和缺点

### 流程

- 先静：拆分组件（定义、注册、使用）。组装组件（组装在App根组件）。渲染组件（初始化渲染）
- 后动：初始化渲染动态数据、动态交互

### 缺点

- 不利于SEO —> 服务端渲染SSR：动态渲染、配置繁琐。
- 首屏渲染时间长 —> 预渲染Prerendering：适用于静态站点。



## vue引入NProgress

```js
// 引入进度条插件
import NProgress from "nprogress";
import "nprogress/nprogress.css";

router.beforeEach((to, from, next) => {
  // console.log(to.path, from.path);
  // 当路由路径改变时，才使用进度条
  if (to.path !== from.path) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});
```



## vue.config.js

- 这个是脚手架给我们的一个配置文件，可以用来通向webpack配置文件

- ###  `runtimeCompiler`：设置为 `true` 后你就可以在 Vue 组件中使用 `template` 选项了，但是这会让你的应用额外增加 10kb 左右。

- 只加载less：

```js
css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true, // 加载LESS 需要把JS设置一下
      },
    },
  },
```

- lintOnSave: false   关闭语法检查，即使变量声明未使用也不报错
- 配置代理：

```js
module.exports = {
  lintOnSave: false,
 devServer: {
    proxy: {
      "/api": {
        // 只对路径(请求路由)以/api开头的请求进行代理转发(只咬它)
        target: "http://39.98.123.211", // 转发的目标url
        // 看最终请求的路径中是否有/api，即使真实路径没有，/api
        // pathRewrite: { "^/api": "" },
        changeOrigin: true, // 支持跨域
      },
    },
  },
};

1. 先把请求改到本地
2. 添加统一转发标志，配置代理
3. 转发给目标服务器
4. 根据需求判断需要重写标志否
```



## jsconfig.json

### 配置@代码提示

```js
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "exclude": ["node_modules", "dist"]
}
```



## react配置代理

### 方法一

> 在package.json中追加如下配置

```json
"proxy":"http://localhost:5000"
```

说明：

1. 优点：配置简单，前端请求资源时可以不加任何前缀。
2. 缺点：不能配置多个代理。
3. 工作方式：上述方式配置代理，当用Ajax请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）



### 方法二

1. 第一步：创建代理配置文件

   ```
   在src下创建配置文件：src/setupProxy.js
   ```

2. 编写setupProxy.js配置具体代理规则：

   ```js
   const { createProxyMiddleware } = require("http-proxy-middleware");
   
   module.exports = function (app) {
     app.use(
       "/api1", //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
       createProxyMiddleware({
         target: "http://localhost:5000", //配置转发目标地址(能返回数据的服务器地址)
         changeOrigin: true, //控制服务器接收到的请求头中host字段的值
         /*
         	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
         	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
         	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
         */
         pathRewrite: { "^/api1": "" }, //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
       })
     );
   
     app.use(
       "/api2",
       createProxyMiddleware({
         target: "http://localhost:5001",
         changeOrigin: true,
         pathRewrite: { "^/api2": "" },
       })
     );
   };
   
   ```

说明：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2. 缺点：配置繁琐，前端请求资源时必须加前缀。



上述操作请根据官方文档更新

中文文档地址：https://create-react-app.bootcss.com/docs/proxying-api-requests-in-development#configuring-the-proxy-manually



## VSCODE优化路径

- 创建`jsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "exclude": ["node_modules", "dist"]
}
```



## lodash库函数

- throttle：节流函数

```js
import throttle from "lodash/throttle";

showCategorys: throttle(function (index) {
   console.log(true);
   this.currentIndex = index;
}, 200),
```



## 开发中注意事项

### 解决路由跳转 NavigationDuplicated错误

- vue-router3.1.0之后，引入了push()的promise语法，如果没有通过参数指定回调返回一个promise来指定成功/失败的回调，且内部会判断如果要跳转的路径和参数变化，会抛出一个失败的promise
- 解决一：在进行跳转时，指定跳转成功的回调函数或catch错误

```js
this.$router.push(`/serch/$(this.keyword)`).catch(()=>{})
```

- 最终解决：在原型上修改，这样所有用push的地方都不会报错了

```js
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject);
  }
  return originalPush.call(this, location).catch((err) => err);
};
```

### watch监视路由不要开启deep

- 因为每一次路由跳转都会生成一个新的$route



## vee-validate表单验证

- # Interaction and UX 

  - mode='lazy'：当用户离开输入（on`blur`或`change`）时触发。
  - tag='div': 默认是span，需要改成div



## 全局前置守卫

- next(路径或者对象): 不写参数代表无条件放行，写参数代表强制跳转到指定位置



## ES6模块化

- 默认暴露：`全写很重要`

```js
export default {a:10} => {default: {a: 100}}

import {default as xxx} from ''(全写)
```

- 分别暴露

```js
export const a = 1 => {a}
```

- 统一暴露

```js
const a = 1;
exort { a }
```

