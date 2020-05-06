import { ADD_ITEM, DELETE_ITEM, CLEAR_ITEM, EDIT_ITEM } from "./types";

export default (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case DELETE_ITEM:
      return state.filter((task) => task.id !== action.payload);
    case CLEAR_ITEM:
      return [];
    default:
      return state;
  }
};
