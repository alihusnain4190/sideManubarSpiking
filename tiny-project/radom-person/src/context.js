import React from "react";
import Component1 from "./Component/Component1";
export const UserContext = React.createContext();
export const contexts = (props) => {
  return (
    <div>
      <UserContext.Provider value={"ali husnain"}>
        <Component1 />
      </UserContext.Provider>
      ;
    </div>
  );
};
