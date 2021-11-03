import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  useEffect(() => {
    return () => {
      console.log("首页已卸载");
    };
  }, []);
  return <h2>HHH</h2>;
}

function List() {
  useEffect(() => {
    console.log("欢迎来到List");
    return () => {
      console.log("列表已卸载");
    };
  });
  return <h2>List</h2>;
}

export default function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    return () => {
      console.log("---------");
    };
  }, [count]);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>点我加1</button>

      <Router>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/list">列表</Link>
          </li>
        </ul>
        <Route path="/" component={Index} />
        <Route path="/list" component={List} />
      </Router>
    </div>
  );
}
