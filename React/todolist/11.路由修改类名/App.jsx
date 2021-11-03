import { Component } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
// NavLink专门做导航,相对于Link来说，多了一些属性，如activeClassName
import { Route } from "react-router-dom";
import MyLink from "./components/MyLink";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 在react，Link组件完成路径切换,to属性是切换路径 */}
              {/* 当自定义组件是双标签时， 内容是通过props的children传递的*/}
              <MyLink to="/home">Home</MyLink>
              <MyLink to="/about">About</MyLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
