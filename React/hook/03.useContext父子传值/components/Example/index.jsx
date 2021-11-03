import React, { useState, createContext, useContext } from "react";
const CountContext = createContext();

function Count() {
  const count = useContext(CountContext);

  return (
    <div>
      <h2>{count}</h2>
    </div>
  );
}

export default function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>加一</button>
      <CountContext.Provider value={count}>
        <Count />
      </CountContext.Provider>
    </div>
  );
}
