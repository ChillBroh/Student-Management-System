import { useState } from "react";

function CounterFunction() {
  const [number, setNumber] = useState(0);

  const increament = () => {
    setNumber(number + 1);
  };
  const decrement = () => {
    setNumber(number - 1);
  };
  const reset = () => {
    setNumber(0);
  };

  return (
    <div>
      <h1>Number : {number}</h1>
      <button onClick={increament}>+</button>{" "}
      <button onClick={decrement}>-</button>{" "}
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default CounterFunction;
