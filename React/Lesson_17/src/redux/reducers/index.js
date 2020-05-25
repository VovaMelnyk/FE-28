import { combineReducers } from "redux";
import todo from "./todo";
import user from "./user";
import type from "./type";
const rootReducer = combineReducers({
  todo,
  user,
  type,
});

export default rootReducer;
