/*
 * @Author: your name
 * @Date: 2021-11-09 10:25:08
 * @LastEditTime: 2021-11-09 11:06:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \note\移动端\mobile\config-overrides.js
 */
const {
  override,
  fixBabelImports,
  addLessLoader,
  addPostcssPlugins,
} = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" },
  }),
  addPostcssPlugins([
    require("postcss-px2rem")({
      remUnit: 64,
    }),
  ])
);
