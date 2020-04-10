import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppHooks from './AppHooks'
import "./index.css";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <React.StrictMode>
    <AppHooks />
  </React.StrictMode>,
  document.getElementById("root")
);
