import { combineReducers } from "redux";
import { counterReducer } from "./counter";


const rootReducer = combineReducers({
  number: counterReducer,
});

export default rootReducer;
