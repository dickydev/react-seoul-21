import { useState } from "react";

export function useCounter(intialValue: number = 0) {
  const [count, setCount] = useState(intialValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(intialValue);

  return {
    count,
    increment,
    decrement,
    reset,
  };
}
