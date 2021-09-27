#### babel(转义工具)

项目上线前会将ES6转成ES5
node -> npm -> babel

用法(ES6语法转义为ES5)：
1. 安装npm环境：npm init
2. 安装babel-preset-env字符集： i babel-preset-env --save-dev
3. 创建一个babelrc文件："presets": ["babel-preset-env"]
4. 安装脚手架工具: npm i babel-cil --save-dev
5. 在package.json的script脚本里面添加："build": "babel src -d lib"(src和lib是文件夹，如果是文件用-o)
6. 转义：npm run build
