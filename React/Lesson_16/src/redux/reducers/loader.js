import {
  TODO_REQUEST_START,
  TODO_REQUEST_SUCSSES,
  TODO_DELETE_START,
  TODO_DELETE_SUCSSES,
} from "../types/index";
const initialState = false;

export default (state = initialState, { type }) => {
  switch (type) {
    case TODO_REQUEST_START:
    case TODO_DELETE_START:
      return true;
    case TODO_REQUEST_SUCSSES:
    case TODO_DELETE_SUCSSES:
      return false;
    default:
      return state;
  }
};
