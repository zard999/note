/*
 * @Author: your name
 * @Date: 2021-11-07 11:35:43
 * @LastEditTime: 2021-11-07 14:16:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \note\React\redux\src\components\Main\index.js
 */
import React, { Component } from "react";
import "./index.css";

import ItemContainer from "../Item";

import { connect } from "react-redux";
class Main extends Component {
  render() {
    const { list } = this.props;
    return (
      <ul className="todo-main">
        {list.map((item) => {
          return <ItemContainer key={item.id} item={item} />;
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => state;

const MainContainer = connect(mapStateToProps)(Main);

export default MainContainer;
