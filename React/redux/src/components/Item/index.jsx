/*
 * @Author: your name
 * @Date: 2021-11-07 12:11:55
 * @LastEditTime: 2021-11-07 15:43:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \note\React\redux\src\components\Item\index.jsx
 */
import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";

// 导入action
import { deleteListAction, handleCheckAction } from "../../redux/actions";

class Item extends Component {
  state = {
    mouse: false,
  };

  render() {
    const { id, done, hobby } = this.props.item;
    const { mouse } = this.state;

    return (
      <li
        style={{ backgroundColor: mouse ? "#999" : "white" }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck} />
          <span>{hobby}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
          onClick={this.deleteItem(id)}
        >
          删除
        </button>
      </li>
    );
  }

  handleMouse = (flag) => {
    return () => {
      this.setState({
        mouse: flag,
      });
    };
  };

  deleteItem = (id) => {
    const { deleteList } = this.props;
    return () => {
      deleteList(id);
    };
  };

  handleCheck = () => {
    const { handleCheckChange, item } = this.props;
    handleCheckChange(item.id, item.done);
  };
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  deleteList: deleteListAction,
  handleCheckChange: handleCheckAction,
};

const ItemContainer = connect(mapStateToProps, mapDispatchToProps)(Item);
export default ItemContainer;
