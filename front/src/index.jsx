import React from "react";
import ReactDOM from "react-dom";

import CalenderBoard from "./components/CalendarBoard";

const App = () => (
  <div>
    <CalenderBoard />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
