import { combineReducers } from "redux";
import { counterReducer } from "./counter";
import todo from "./todo";

const rootReducer = combineReducers({
  number: counterReducer,
  todo,
});

export default rootReducer;
