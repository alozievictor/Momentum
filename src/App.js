import React from "react";
import Time from "./component/time";
import Main from "./component/Weather";
import AllDate from "./component/date";
import Qoute from "./component/qoute";


function App() {
  return (
    <div className="App">
      <Main />
      <Time />
      <AllDate />
      <Qoute />
      
    </div>
  );
}

export default App;
