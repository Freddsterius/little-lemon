import React, { useState } from "react";

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const handleDecrement = () => {
    setCount((a) => a - 1);
  };
  const handleIncrement = () => {
    setCount((a) => a + 1);
  };
  const handleReset = () => {
    setCount(initialCount);
  };
  const handleSwitchSign = () => {
    setCount((a) => a * -1);
  };

  return (
    <div>
      <h2>Hello Counter for Unit Testing Practice Purposes</h2>
      <h1>
        Count:<p data-testid="count">{count}</p>
      </h1>
      <br />
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement} data-testid="incrementButton">
        Increment
      </button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSwitchSign}>Switch Sign</button>
    </div>
  );
};

export default Counter;
