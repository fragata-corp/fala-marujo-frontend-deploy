import React from "react";
import "./resete.css";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Routes from "./routes";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};

function App() {
  return (
    <Provider template={AlertTemplate} {...options}>
      {" "}
      <Routes />
    </Provider>
  );
}

export default App;
