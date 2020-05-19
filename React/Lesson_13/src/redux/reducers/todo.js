import { createReducer } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, updateTodo } from "../actions/todo";

export default createReducer([], {
  [addTodo]: (state, action) => [...state, action.payload],
  [deleteTodo]: (state, action) =>
    state.filter((el) => el.id !== action.payload),
  [updateTodo]: (state, action) => {
    const editedElement = { ...state[action.payload], status: true };
    state[action.payload] = editedElement;
  },
});

// export default createReducer([], {
//   [addTodo]: (state, action) => {
//     state.push(action.payload)
//   },
// });
