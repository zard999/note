import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import ToDoList from "./todoList";

class App extends Component {
  render() {
    return (
      <Fragment>
        <ToDoList />
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
