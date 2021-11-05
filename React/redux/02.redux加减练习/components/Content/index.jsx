/*
 * @Author: your name
 * @Date: 2021-11-05 19:38:40
 * @LastEditTime: 2021-11-05 19:51:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \note\React\redux\src\components\Content\index.js
 */
import { Component } from "react";
import store from "../../redux/store";
import {
  createCustomCountAction,
  createMinusOneAction,
  createPlusOneAction,
} from "../../redux/actions/countAction";
export default class Content extends Component {
  render() {
    return (
      <div>
        <button onClick={this.run}>Run</button>
        <p>* 请打开控制台查看运行结果</p>
      </div>
    );
  }

  run = () => {
    store.dispatch(createPlusOneAction());
    store.dispatch(createMinusOneAction());
    store.dispatch(createCustomCountAction(5));
  };
}
