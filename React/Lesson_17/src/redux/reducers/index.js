import { combineReducers } from "redux";
import todo from "./todo";
import user from "./user";
import filter from "./filter";

const rootReducer = combineReducers({
  todo,
  user,
  filter,
});

export default rootReducer;
