#### babel(js编译器，转义工具)

项目上线前会将ES6转成ES5
node -> npm -> babel

用法(ES6语法转义为ES5)：
1. 安装npm环境：npm init
2. 安装babel-preset-env字符集： i babel-preset-env --save-dev
3. 创建一个babelrc文件："presets": ["babel-preset-env"]
4. 安装脚手架工具: npm i babel-cil --save-dev
5. 在package.json的script脚本里面添加："build": "babel src -d lib"(src和lib是文件夹，如果是文件用-o)
6. 转义：npm run build
7. 运行js：node 文件 || 在package.json的script脚本里面添加："script-name": "babel-node ./scr/app.js"

- 在package.json的script脚本里面添加的作用：babel在本地不能运行babel命令，得借用script脚本
- babel-node: 执行js文件的命令
- babel-register: require("babel-register") (自动编译)
- babel-core: 让具体一段代码转义，其他的不转义
- ES6新的api不会转码: 但是可以用babel-polyfill转成浏览器可以识别的代码

**用在线编译也很方便**
**文档 -> 在浏览器中找到代码也可以配置**


#### let

kiss原则(Keep It Simple & Stupid)
块级作用域：使用{}扩起来的区域

- let 在同一作用域下不可重复声明
- let 不会提升，会产生一个暂时性死区
- let 只会在当前的块级作用域下生效
- let 本质上就是为js增加一个块级作用域
- 块级作用域是没有返回值的
