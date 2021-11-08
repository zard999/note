/*
 * @Author: your name
 * @Date: 2021-11-08 20:45:03
 * @LastEditTime: 2021-11-08 21:04:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \note\React\hook\src\components\UserList\index.jsx
 */
import React from "react";

export default function UserList() {
  // 使用三个state分别保存用户列表，loading 状态和错误状态
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  // 定义获取用户的回调函数
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://www.fastmock.site/mock/1067b8b6cb8580eddf730b26f9008bdb/test01/fuwu"
      );
      const json = await res.json();
      console.log(json.data);
      // 请求成功后将用户数据放入state
      setUsers(json.data);
    } catch (e) {
      // 请求失败将错误状态放入state
      setError(e);
    }
  };

  return (
    <div className="user-list">
      <button onClick={fetchUsers} disabled={loading}>
        {loading ? "Loading" : "Show Users"}
      </button>
      {error && <div style={{ color: "red" }}>Faild: {String(error)}</div>}
      <br />
      <ul>
        {users.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
