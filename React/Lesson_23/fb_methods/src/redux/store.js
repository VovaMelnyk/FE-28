import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import userReducer from "../redux/userSlice";
import listReducer from "../redux/listSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    list: listReducer,
  },
  middleware: [thunk, ...getDefaultMiddleware()],
});

export default store;
