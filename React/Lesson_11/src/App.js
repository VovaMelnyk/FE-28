import React from "react";
import "./App.css";
import Root from "./Root/Root";
import Storage from "./renderProp/Storage";
import SimpleContextExample from "./SimpleContextExample/SimpleContextExample";
import SimpleProvider from "./context/Providers/SimpleProvider";
// import ThemeProvider from "./context/Providers/ThemeProvider";
import TodoState from "./todoGlobal/todoState";

function App() {
  return (
    <TodoState>
      <Storage>
        {({ saveToStorage, removeFromStorage, getFromStorage }) => (
          <Root
            saveToStorage={saveToStorage}
            removeFromStorage={removeFromStorage}
            getFromStorage={getFromStorage}
          />
        )}
      </Storage>
    </TodoState>
  );

  // return (
  //   <SimpleProvider>
  //     <SimpleContextExample />
  //   </SimpleProvider>
  // );
}

export default App;
