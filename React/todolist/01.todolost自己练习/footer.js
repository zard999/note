import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import { Row, Col, Checkbox, Button } from "antd";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Row
          align="middle"
          justify="space-between"
          style={{ width: "480px", marginLeft: "-14px" }}
        >
          <Col>
            <Checkbox>
              已完成{this.props.complete}/ 全部{this.props.todos.length}
            </Checkbox>
          </Col>
          <Col>
            <Button type="primary">清除已完成任务</Button>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default Footer;
