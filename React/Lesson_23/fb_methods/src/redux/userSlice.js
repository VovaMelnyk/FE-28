import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUserAction(state, action) {
      return action.payload;
    },
    deleteUser(state, action) {
      return null;
    },
  },
});

const { actions, reducer } = userSlice;
export const { setUserAction, deleteUser } = actions;
export default reducer;
