import React, { useReducer } from "react";
const intialState = 0;

function countReducer(state: number, action: { type: string }) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return intialState;
    default:
      return state;
  }
}

const CounterReducer: React.FC = () => {
  const [count, dispatch] = useReducer(countReducer, intialState);

  return (
    <div>
      <h1>Counter Reducer</h1>
      <h2>Counter : {count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}> +1 </button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default CounterReducer;
