import React from "react";
import "./App.css";
import Root from "./Root/Root";
import SimpleContextExample from "./SimpleContextExample/SimpleContextExample";
import SimpleProvider from "./context/Providers/SimpleProvider";

function App() {
  // return <Root />;
  return (
    <SimpleProvider>
      <SimpleContextExample />
    </SimpleProvider>
  );
}

export default App;
