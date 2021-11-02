import { Component } from "react";
import axios from "axios";

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={this.getStu}>点击请求学生数据</button>
        <button onClick={this.getCar}>点击请求汽车数据</button>
      </div>
    );
  }

  getStu = () => {
    axios
      .get("/api1/students")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  getCar = () => {
    axios
      .get("/api2/cars")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export default App;
