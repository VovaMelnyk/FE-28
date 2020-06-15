import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    addItem(state, action) {},
    deleteItem(state, action) {},
  },
});

const { actions, reducer } = userSlice;

export const { addItem, deleteItem } = actions;
export default reducer;
