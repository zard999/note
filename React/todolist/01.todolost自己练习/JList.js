import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import { List } from "antd";
import Item from "./item";

class JList extends Component {
  render() {
    return (
      <Fragment>
        <List
          bordered
          style={{ width: "480px", marginLeft: "10px" }}
          dataSource={this.props.dataSource}
          renderItem={(item, index) => (
            <Item
              item={item}
              index={index}
              deleteItem={this.props.deleteItem}
            />
          )}
        />
      </Fragment>
    );
  }
}

export default JList;
