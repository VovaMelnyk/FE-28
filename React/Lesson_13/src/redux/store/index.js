// import { createStore } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
// import rootReducer from "../reducers";
// import { counterReducer } from "../reducers/counter";
import todo from "../reducers/todo";
import number from "../slice/counter";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
  number,
  todo,
};

// const rootReducer = {
//   number: counterReducer,
//   todo,
// }; // without slice

const globalState = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
// const globalState = createStore(rootReducer, devToolsEnhancer());

export default globalState;
