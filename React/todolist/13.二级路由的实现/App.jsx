import { Component } from "react";
import About from "./pages/About";
import Header from "./components/Header";
import Home from "./pages/Home";
// NavLink专门做导航,相对于Link来说，多了一些属性，如activeClassName
import { Route, Switch } from "react-router-dom";
import MyLink from "./components/MyLink";
/*
  组件的分类：
    站在定义的方式分类：
      - 函数式组件
      - 类式组件
    
    站在使用的方式分类：
      - 一般组件
      - 路由组件

    路由组件
 */

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
              {/* Switch在当前Switch中找到了之后立马推出当前的Switch组件，继续往下走 */}

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
