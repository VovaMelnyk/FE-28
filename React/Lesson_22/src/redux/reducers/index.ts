import { combineReducers } from "redux";
import todos from "./todo";

const rootReducer = combineReducers({
  todos,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
