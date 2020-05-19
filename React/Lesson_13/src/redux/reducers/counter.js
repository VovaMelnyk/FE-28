import { createReducer } from "@reduxjs/toolkit";
import { plus, minus, reset } from "../actions/counter";

export const counterReducer = createReducer(0, {
  [plus]: (state, action) => state + 1,
  [minus]: (state, action) => state - 1,
  [reset]: () => 0,
});

// Slice
// import { createSlice } from "@reduxjs/toolkit";
// const countSlice = createSlice({
//   name: "counter",
//   initialState: 0,
//   reducers: {
//     increment: (state, action) => state + 1,
//     decrement: (state, action) => state - 1,
//     reset: (state, action) => 0,
//   },
// });

// export const { increment, decrement, reset } = countSlice.actions;
// export const counter = (state) => state.counter;
// export default countSlice.reducer;
