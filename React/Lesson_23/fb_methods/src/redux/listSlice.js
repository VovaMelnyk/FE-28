import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    addItem(state, action) {
      return [...state, action.payload];
    },
    deleteItem(state, action) {
      return state.filter((doc) => doc.id !== action.payload);
    },
    getItems(state, action) {
      return [...state, ...action.payload];
    },
  },
});

const { actions, reducer } = userSlice;

export const { addItem, deleteItem, getItems } = actions;
export default reducer;
