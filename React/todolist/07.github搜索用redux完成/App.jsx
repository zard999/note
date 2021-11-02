import { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";
import store from "./store/";
// 引入type管理工具
// import { USERINFO } from "./store/actionTypes";
// 引入action管理工具
import { getUserInfo } from "./store/actionCreators";

class App extends Component {
  state = store.getState();

  render() {
    return (
      <div className="container">
        <Search getUserInfo={this.getUserInfo} />
        <List obj={this.state.obj} />
      </div>
    );
  }

  componentDidMount() {
    store.subscribe(this.storeChange);
  }

  getUserInfo = (userInfo) => {
    // 创建actiov
    const action = getUserInfo(userInfo);

    store.dispatch(action);
  };

  storeChange = () => {
    this.setState(store.getState());
  };
}

export default App;
