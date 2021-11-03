import React, { useState } from "react";

export default function Example() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>点我加1</button>
    </div>
  );
}
