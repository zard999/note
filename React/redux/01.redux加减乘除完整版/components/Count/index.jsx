/*
 * @Author: your name
 * @Date: 2021-11-05 17:55:03
 * @LastEditTime: 2021-11-05 18:22:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \note\React\redux\src\components\Count\index.jsx
 */
import React, { Component } from "react";
import store from "../../redux/store";
import Store from "../../redux/store";
import {
  createIncrementAction,
  createDecrementAction,
} from "../../redux/actions/countAction";

export default class Count extends Component {
  state = {
    isHot: true,
  };

  render() {
    return (
      <div>
        <h2>今天天气{this.state.isHot ? "炎热" : "寒冷"}</h2>
        <h2>当前的值是：{Store.getState()}</h2>
        <div>
          <select ref={(el) => (this.selectEle = el)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <button onClick={this.increment}>increment1</button>
          <button onClick={this.decrement}>decrement1</button>
          <button onClick={this.incrementOdd}>根据option加几</button>
          <button onClick={this.incrementWait}>延时1s执行</button>
        </div>
      </div>
    );
  }

  increment = () => {
    const { value } = this.selectEle;
    store.dispatch(createIncrementAction(+value));
  };

  decrement = () => {
    const { value } = this.selectEle;
    store.dispatch(createDecrementAction(+value));
  };

  incrementOdd = () => {
    const { value } = this.selectEle;
    if (store.getState() % 2 === 0) return;
    store.dispatch(createIncrementAction(+value));
  };

  incrementWait = () => {
    const { value } = this.selectEle;
    setTimeout(() => {
      store.dispatch(createIncrementAction(+value));
    }, 1000);
  };
}
