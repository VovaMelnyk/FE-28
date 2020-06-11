import { ADD, DELETE, Todo, TodoActionsInterface } from "../constants/types";
// const initialState: Array<Todo> = [];
const initialState: Todo[] = [];
export default (state = initialState, action: TodoActionsInterface): Todo[] => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case DELETE:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
