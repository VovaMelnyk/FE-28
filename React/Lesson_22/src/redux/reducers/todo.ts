import { ADD, DELETE, Todo, TodoActionsType } from "../constants/types";
const initialState: Todo[] = [];
export default (state = initialState, action: TodoActionsType): Todo[] => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case DELETE:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
