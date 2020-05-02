import React from "react";
import "./App.css";
import Root from "./Root/Root";
import Storage from "./renderProp/Storage";

function App() {
  return (
    <Storage
      render={({ save, get, remove }) => (
        <Root save={save} get={get} remove={remove} />
      )}
    ></Storage>
  );
}

export default App;
