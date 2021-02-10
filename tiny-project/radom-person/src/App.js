import React from "react";
import "./App.scss";
import Component1 from "./Component/Component1";
import Reducer2 from "./Component/Reducer";

export const UserContext = React.createContext();
function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value={"ali husnain"}>
        <Component1 />
      </UserContext.Provider> */}
      <Reducer2 />
    </div>
  );
}

export default App;
