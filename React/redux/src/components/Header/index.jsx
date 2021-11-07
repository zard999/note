/*
 * @Author: your name
 * @Date: 2021-11-07 11:34:26
 * @LastEditTime: 2021-11-07 14:22:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \note\React\redux\src\components\Header\index.jsx
 */
import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import { addListAction } from "../../redux/actions";
import { nanoid } from "nanoid";

class Header extends Component {
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
          onKeyUp={this.changeValue}
        />
      </div>
    );
  }

  changeValue = (e) => {
    const { addList } = this.props;
    const { target, keyCode } = e;
    if (keyCode !== 13) return;
    if (target.value === "") return alert("不能输入为空");
    const value = { id: nanoid(), hobby: target.value.trim(), done: false };
    addList(value);
    target.value = "";
  };
}

const map = (state) => state;
const mapDispatchToProps = {
  addList: addListAction,
};

const HeaderContainer = connect(map, mapDispatchToProps)(Header);
export default HeaderContainer;
