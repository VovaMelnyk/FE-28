import { combineReducers } from "redux";
import { counterReducer } from "./counter";
import todo from "./todo";
import loader from "./loader";
import error from "./error";

const rootReducer = combineReducers({
  number: counterReducer,
  todo,
  loader,
  error,
});

export default rootReducer;
