import React from "react";
import ReactDOM from "react-dom";
import Header from "ecomm/Header";

import "./index.css";

const App = () => (
  <div className="container">
      Student Form - Google App
    <Header />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
