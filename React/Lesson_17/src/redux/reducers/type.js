import { SET_ALL, SET_COMPLETE, SET_UNCOMPLETED } from "../types";
const initialState = "all";

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL:
      return "all";
    case SET_COMPLETE:
      return "completed";
    case SET_UNCOMPLETED:
      return "uncompleted";
    default:
      return state;
  }
};
