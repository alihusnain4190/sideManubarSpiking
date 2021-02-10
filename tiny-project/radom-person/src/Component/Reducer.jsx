import React, { useReducer } from "react";
import { act } from "react-dom/test-utils";

const Reducer = () => {
  const initValue = 0;
  const reducer = (state, action) => {
    console.log(action === "increment");
    if (action === "increment") {
      return state + 1;
    } else if (action === "decrement") {
      return state - 1;
    } else if (action === "reset") {
      return initValue;
    } else return state;
  };
  const handleIncrement = () => {
    dispatch("increment");
  };
  const handleDerement = () => {
    dispatch("decrement");
  };
  const handleReset = () => {
    dispatch("reset");
  };
  const [value, dispatch] = useReducer(reducer,initValue);
  return (
    <div>
      {value}
      <button onClick={handleIncrement}>Increment</button>

      <button onClick={handleDerement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Reducer;
