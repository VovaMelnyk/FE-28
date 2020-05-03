import React from "react";
import "./App.css";
import Root from "./Root/Root";
import SimpleContextExample from "./SimpleContextExample/SimpleContextExample";
import SimpleProvider from "./context/Providers/SimpleProvider";
import ThemeProvider from "./context/Providers/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Root />
    </ThemeProvider>
  );
  // return (
  //   <SimpleProvider>
  //     <SimpleContextExample />
  //   </SimpleProvider>
  // );
}

export default App;
