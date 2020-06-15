import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    addItem(state, action) {
      return [...state, action.payload];
    },
    deleteItem(state, action) {
      return state.filter((el) => el.id !== action.payload);
    },
    getItem(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = userSlice;

export const { addItem, deleteItem, getItem } = actions;
export default reducer;
