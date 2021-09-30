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

#### 指数运算符

- ES3 中使用 Math.pow 方法可以计算某个数值的 n 次方
- \*\*：ES11 新加的
- 指数运算是从右向左计算的

#### 进制转换

0 进制默认为 10 进制
没有 1 进制，为 NaN
