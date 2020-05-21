import { TODO_REQUEST_ERROR, ERROR_RESET, DELETE_ERROR } from "../types/index";
const initialState = false;

export default (state = initialState, { type }) => {
  switch (type) {
    case TODO_REQUEST_ERROR:
    case DELETE_ERROR:
      return true;
    case ERROR_RESET:
      return false;
    default:
      return state;
  }
};
