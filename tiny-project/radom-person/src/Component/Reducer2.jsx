import React, { useReducer } from "react";
import { act } from "react-dom/test-utils";

const Reducer = () => {
  const initState = {
    initValue: 0,
  };
  // const initValue = 0;
  const reducer = (state, action) => {
    console.log(action.type === "increment");
    if (action === "increment") {
      return { initValue: state.initValue + 1 };
    } else if (action.type === "decrement") {
      return { initValue: state.initValue - 1 };
    } else if (action.type === "reset") {
      return initState;
    } else return state;
  };
  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleDerement = () => {
    dispatch({ type: "decrement" });
  };
  const handleReset = () => {
    dispatch({ type: "reset" });
  };
  const [value, dispatch] = useReducer(reducer, initValue);
  return (
    <div>
      {value.initValue}
      <button onClick={handleIncrement}>Increment</button>

      <button onClick={handleDerement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Reducer;
