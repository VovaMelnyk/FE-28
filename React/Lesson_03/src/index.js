import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// const title = React.createElement('h1', {}, 'Hello React');
// const header = React.createElement('header', {}, title)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(
//   header,
//   document.getElementById('root')
// );

// const title = React.createElement('h1', {}, 'My First React Code');
// const container = React.createElement('div', {}, title);
// container,
