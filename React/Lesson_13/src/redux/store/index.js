import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
// import counter from "../reducers/counter"; // slice

const globalState = configureStore({
  reducer: rootReducer,
});

// const globalState = configureStore({
//   reducer: {
//     todo,
//     counter: counter,
//   },
// }); // slice

export default globalState;

// const store = configureStore({
//     reducer,
//     middleware,
//     devTools: process.env.NODE_ENV !== 'production',
//     preloadedState,
//     enhancers: [reduxBatch]
//   })
