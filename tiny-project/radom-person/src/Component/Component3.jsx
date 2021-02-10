import React, { useContext } from "react";
import { UserContext } from "../App";

const Component3 = () => {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <div>
      Component3
      {user}
    </div>
  );
};

export default Component3;
