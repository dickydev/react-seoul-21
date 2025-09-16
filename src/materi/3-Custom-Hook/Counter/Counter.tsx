import React from "react";
import { useCounter } from "../hooks/useCounter";

const Counter: React.FC = () => {
  const { count, decrement, increment, reset } = useCounter(10);
  return (
    <>
      <h1>Counter App</h1>

      <h2>Counter : {count}</h2>

      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Counter;
