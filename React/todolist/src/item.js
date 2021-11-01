import React, { Component } from "react";
import "antd/dist/antd.css";
import { List, Checkbox, Button } from "antd";

class Item extends Component {
  state = {
    mouse: false,
  };

  handleMouse = (flag) => {
    return () => {
      this.setState({
        mouse: flag,
      });
    };
  };
  render() {
    return (
      <div>
        <List.Item
          onMouseEnter={this.handleMouse(true)}
          onMouseLeave={this.handleMouse(false)}
          style={{
            height: "60px",
            backgroundColor: this.state.mouse ? "#999" : "white",
          }}
        >
          <Checkbox
            defaultChecked={this.props.item.done}
            style={{ marginLeft: "-10px" }}
          >
            {this.props.item.name}
          </Checkbox>
          <Button
            style={{
              width: "60px",
              display: this.state.mouse ? "block" : "none",
            }}
            onClick={this.props.deleteItem(this.propsindex)}
            type="primary"
          >
            删除
          </Button>
        </List.Item>
      </div>
    );
  }
}

export default Item;
