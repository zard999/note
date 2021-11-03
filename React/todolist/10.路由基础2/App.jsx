import { Component } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import { Link, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 在react，Link组件完成路径切换,to属性是切换路径 */}
              <Link
                to="/about"
                className="list-group-item active"
                href="./about.html"
              >
                About
              </Link>
              <Link to="/home" className="list-group-item" href="./home.html">
                Home
              </Link>
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
