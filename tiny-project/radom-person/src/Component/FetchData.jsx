import React, { useState, useEffect } from "react";
import axios from "axios";
const FetchData = () => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [err, setErr] = useState("");
  useEffect(async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/pots/1"
      );
      setLoading(false);
      setPost(data);
    } catch {
      setLoading(false);
      setPost({});
      setErr("something is wrong");
    }
  }, []);
  console.log(post.title);
  return (
    <div>
      {loading ? "loading" : post.title}
      {err ? err : null}
    </div>
  );
};

export default FetchData;
