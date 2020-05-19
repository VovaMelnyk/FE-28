import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "number",
  initialState: 0,
  reducers: {
    plus: (state, action) => state + 1,
    minus: (state, action) => state - 1,
    reset: (state, action) => 0,
  },
});

export const { plus, minus, reset } = counterSlice.actions;
export const number = (state) => state.number;
export default counterSlice.reducer;
