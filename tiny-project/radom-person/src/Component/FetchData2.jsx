import React, { useReducer, useEffect } from "react";
import axios from "axios";
const initState = {
  isLoading: true,
  post: {},
  err: "",
};
const reducer = (state, action) => {
  if (action.type === "FETCH_SUCCESS") {
    return { isLoading: false, post: action.payload, err: "" };
  } else if (action.type === "FETCH_ERROR") {
    return { isLoading: false, post: {}, err: "something is wrong" };
  } else {
    return state;
  }
};
const FetchData2 = () => {
  const [data, dispatch] = useReducer(reducer, initState);
  useEffect(async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch {
      dispatch({ type: "FETCH_ERROR" });
    }
  }, []);
  return (
    <div>
      {data.loading ? "loading" : data.post.title}
      {data.err ? data.err : null}
    </div>
  );
};

export default FetchData2;
