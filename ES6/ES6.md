#### babel(js 编译器，转义工具)

项目上线前会将 ES6 转成 ES5
node -> npm -> babel

用法(ES6 语法转义为 ES5)：

1. 安装 npm 环境：npm init
2. 安装 babel-preset-env 字符集： i babel-preset-env --save-dev
3. 创建一个 babelrc 文件："presets": ["babel-preset-env"]
4. 安装脚手架工具: npm i babel-cil --save-dev
5. 在 package.json 的 script 脚本里面添加："build": "babel src -d lib"(src 和 lib 是文件夹，如果是文件用-o)
6. 转义：npm run build
7. 运行 js：node 文件 || 在 package.json 的 script 脚本里面添加："script-name": "babel-node ./scr/app.js"

- 在 package.json 的 script 脚本里面添加的作用：babel 在本地不能运行 babel 命令，得借用 script 脚本
- babel-node: 执行 js 文件的命令
- babel-register: require("babel-register") (自动编译)
- babel-core: 让具体一段代码转义，其他的不转义
- ES6 新的 api 不会转码: 但是可以用 babel-polyfill 转成浏览器可以识别的代码

**用在线编译也很方便**
**文档 -> 在浏览器中找到代码也可以配置**

#### let

kiss 原则(Keep It Simple & Stupid)
块级作用域：使用{}扩起来的区域

- let 在同一作用域下不可重复声明
- let 不会提升，会产生一个暂时性死区
- let 只会在当前的块级作用域下生效
- let 本质上就是为 js 增加一个块级作用域
- 块级作用域是没有返回值的

#### const

TDZ(Temporal Dead Zone):暂时性死区

- 一旦定义必须赋值，值不能被更改
- 有块级作用域，不能提升，有暂时性死区
- 与 let 一样不能重复声明

#### 指数运算符

- ES3 中使用 Math.pow 方法可以计算某个数值的 n 次方
- \*\*：ES11 新加的
- 指数运算是从右向左计算的

#### 进制转换

0 进制默认为 10 进制
没有 1 进制，为 NaN

#### 解构赋值

在解构中使用对象或是数组的时候，慎用（可读性非常差）

#### 解构赋值隐式转换

'hello'会转换成类数组(对象)
Number、Boolear、String 的 toString 方法也可以转换(隐式转换：转换成相应的包装类)
undefined 和 null 是不能进行隐式转换的，会报错

#### 函数的形参和长度

函数的形参赋了值就不会算在 length 中，如果放在第一位，length 为 0
一旦给了形参默认值，arugments 和形参的映射就不存在了

#### fetch

#### 箭头函数

#### ...rest 运算符

展开或是收集
只能放在后面
函数形参默认值和 rest 运算符都不能找到 length

#### Promise

Promise：异步问题同步化解决方案(最优解)
为什么 Promise 执行时同步，p.then 是异步
ajax 分离出来的程序，要设置 async 为 false，但是分离出来之后还是会阻塞后面的程序
