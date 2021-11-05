/*
 * @Author: your name
 * @Date: 2021-11-05 15:04:04
 * @LastEditTime: 2021-11-05 16:39:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \note\React\redux\src\components\Count\index.jsx
 */
import React, { Component } from "react";
import store from "../../redux/store";
//在组件中一定要引入store，store是redux的核心，只有引入了，才能执行store，开启redux
import {
  createIncrementAction,
  createDecrementAction,
} from "../../redux/actions/countAction";

export default class index extends Component {
  state = {
    /**
     * @description:
     * @param {*}
     * @return {*}
     */
    isHot: true,
  };
  render() {
    return (
      <div>
        <h1>今天天气{this.state.isHot ? "炎热" : "寒冷"}</h1>
        <h2>当前的值是{store.getState()}</h2>
        <div>
          <select ref={(c) => (this.selectEle = c)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.incrementOdd}>如果奇数再加</button>
          <button onClick={this.incrementWait}>延迟1s再加</button>
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
