import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class List extends Component {
  state = {
    list: [
      { uid: 123, title: "技术胖的个人博客-1" },
      { uid: 456, title: "技术胖的个人博客-2" },
      { uid: 789, title: "技术胖的个人博客-3" },
    ],
  };
  render() {
    return (
      <ul>
        {this.state.list.map((item, index) => {
          return (
            <li key={index}>
              <Link to={"/list" + item.uid}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    );
  }

  componentDidMount() {
    const { match } = this.props;
    console.log(match.params.id);
  }
}
