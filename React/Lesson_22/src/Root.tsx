import React, { ReactElement } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

function Root(): ReactElement {
  return (
    <Provider store={store}>
      <App title={"Title"}/>
    </Provider>
  );
}

export default Root;
