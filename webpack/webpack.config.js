const ESLintPlugin = require("eslint-webpack-plugin");
const { resolve } = require("path");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "./js/main.js",
    path: resolve(__dirname, "build"),
  },
  // 插件配置
  plugins: [new ESLintPlugin()],
  // 开发模式
  mode: "development",
};
