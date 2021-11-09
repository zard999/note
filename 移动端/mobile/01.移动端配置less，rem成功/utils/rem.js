/*
 * @Author: your name
 * @Date: 2021-11-09 10:48:51
 * @LastEditTime: 2021-11-09 10:50:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \note\移动端\mobile\src\rem.js
 */
(function () {
  var styleNode = document.createElement("style");
  var Ww = document.documentElement.clientWidth / 10;
  styleNode.innerHTML = "html{font-size:" + Ww + "px !important}";
  document.head.appendChild(styleNode);
})();
