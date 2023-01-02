import { useState } from "react";
import "./Counter.css";

function Counter() {
  let [counter, setCounter] = useState(0);

  let increaseValue = () => {
    setCounter(counter += 1)
  }

  let decreaseValue = () => {
    setCounter(counter -= 1)
  }

  let resetValue = () => {
    setCounter(0)
  }

  return (
    <div className="counter">
      <h1 className="title-1">{counter}</h1>
      <button onClick={increaseValue}>➕</button>
      <button onClick={decreaseValue}>➖</button>
      <button onClick={resetValue}>🔄</button>
    </div>
  );
}

export default Counter;
