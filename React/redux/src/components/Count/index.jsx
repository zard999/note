/*
 * @Author: your name
 * @Date: 2021-11-05 17:55:03
 * @LastEditTime: 2021-11-06 12:30:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \note\React\redux\src\components\Count\index.jsx
 */

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// 引入action
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/actions/countAction";

import React, { Component } from "react";

class Count extends Component {
  state = {
    isHot: true,
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>今天天气{this.state.isHot ? "炎热" : "寒冷"}</h2>
        <h2>当前的值是：{this.props.sum}</h2>
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
    const { increment } = this.props;
    increment(+value);
  };

  decrement = () => {
    const { value } = this.selectEle;
    const { decrement } = this.props;
    decrement(+value);
  };

  incrementOdd = () => {
    const { value } = this.selectEle;
    const { sum, increment } = this.props;
    if (sum % 2 === 0) return;
    increment(+value);
  };

  incrementWait = () => {
    const { value } = this.selectEle;
    const { incrementWait } = this.props;
    incrementWait(+value);
  };
}

const mapStateToProps = (state) => ({ sum: state });

// 有action可以这样写，简便写法
// const mapDispatchToProps = {
//   increment: createIncrementAction,
//   decrement: createDecrementAction,
//   incrementWait: createIncrementAsyncAction,
// };

// function increment(value) {
//   return createIncrementAction(value);
// }

// function decrement(value) {
//   return createDecrementAction(value);
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ increment, decrement }, dispatch);
// }// }


const mapDispatchToProps = {
  increment: createIncrementAction,
  decrement: createDecrementAction,
  incrementWait: createIncrementAsyncAction,
};

const countContainer = connect(mapStateToProps, mapDispatchToProps)(Count);
export default countContainer;
