import { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";

class App extends Component {
  state = {
    items: [],
    isFirst: true, //保存用户是否第一次请求
    isLoading: false, //是否在加载中
    errMsg: "", //错误信息
  };
  render() {
    const { items } = this.state;
    return (
      <div>
        <div className="container">
          <Search getUserInfo={this.getUserInfo} />
          <List userInfo={items} state={this.state} />
        </div>
      </div>
    );
  }

  getUserInfo = (info) => {
    this.setState({
      ...info,
    });
  };
}

export default App;
