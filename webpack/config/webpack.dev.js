const ESLintPlugin = require("eslint-webpack-plugin");
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 浏览器自动刷新
  target: "web",
  // 入口文件
  entry: "./src/js/index.js",

  // 输出目录
  output: {
    filename: "./js/main.js",
    path: resolve(__dirname, "build"),
    // 让图片输出到指定目录
    assetModuleFilename: "images/[hash:8][ext][query]",
  },

  // loder配置
  module: {
    rules: [
      // babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      // loder配置less
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },

      // 打包图片
      {
        test: /\.(png|jpeg|gif|svg|jpg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于8kb以下的图片会被打包成base64格式
          },
        },
      },

      // 打包图标字体
      {
        test: [/\.ttf$/, /\.woff$/, /\.woff2$/],
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  // 插件配置(只要是插件，必须要引入)
  plugins: [
    // eslint格式检查,webpack里的eslint只是执行，并没有详细配置
    new ESLintPlugin(),

    // 打包html
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  // 自动编译配置
  devServer: {
    port: 8888, // 端口号
    open: true, // 自动打开浏览器
  },

  // 开发模式
  mode: "development",
  // mode: "production",
};
