import React from "react";

const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button aria-labelledby="counter-increment" onClick={() => setCounter(prev => prev - 1)}>
        decrement
      </button>
      <button aria-labelledby="counter-increment" onClick={() => setCounter(prev => prev + 1)}>
        increment
      </button>
    </div>
  );
}

export default Counter;
