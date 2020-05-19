import { createReducer } from "@reduxjs/toolkit";
import { plus, minus, reset } from "../actions/counter";
export const counterReducer = createReducer(0, {
  [plus]: (state, action) => state + 1,
  [minus]: (state, action) => state - 1,
  [reset]: (state, action) => 0,
});

// import { INCREMENT, DECREMENT, RESET } from "../types";

// const initialState = 0;

// export const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return state + 1;
//     case DECREMENT:
//       return state - 1;
//     case RESET:
//       return 0;
//     default:
//       return state;
//   }
// };

