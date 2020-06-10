import { ADD, DELETE } from "../constants/types";
const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case DELETE:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
