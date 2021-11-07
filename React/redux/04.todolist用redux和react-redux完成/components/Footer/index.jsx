/*
 * @Author: your name
 * @Date: 2021-11-07 11:36:39
 * @LastEditTime: 2021-11-07 16:07:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \note\React\redux\src\components\Footer\index.js
 */
import React, { Component } from "react";
import "./index.css";

//引入connect
import { connect } from "react-redux";

import { completeAction, allChangeAction } from "../../redux/actions";

class Footer extends Component {
  render() {
    const { list, all } = this.props;
    const num = list.reduce((p, c) => (c.done ? p + 1 : p), 0);
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={all} onChange={this.allChange} />
        </label>
        <span>
          <span>已完成{num}</span> / 全部{list.length}
        </span>
        <button className="btn btn-danger" onClick={this.complete}>
          清除已完成任务
        </button>
      </div>
    );
  }

  complete = () => {
    const { list, completeRw } = this.props;
    completeRw(list);
  };

  allChange = (e) => {
    const { allChange } = this.props;
    allChange(e.target.checked);
  };
}

const map = (state) => state;

const mapDispatchToProps = {
  completeRw: completeAction,
  allChange: allChangeAction,
};

const FooterContainer = connect(map, mapDispatchToProps)(Footer);
export default FooterContainer;
