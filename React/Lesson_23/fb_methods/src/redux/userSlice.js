import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUser(state, action) {},
    deleteUser(state, action) {},
  },
});

const { actions, reducer } = userSlice;
export const { setUser, deleteUser } = actions;
export default reducer;
