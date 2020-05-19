// import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../types";
import { createAction } from "@reduxjs/toolkit";

export const addTodo = createAction("ADD_TODO", function prepare({
  title,
  author,
  priority,
  agree,
}) {
  return {
    payload: { title, author, priority, agree, id: Date.now(), status: false },
  };
});

export const deleteTodo = createAction("DELETE_TODO");

export const updateTodo = createAction("UPDATE_TODO");

// export const addTodo = ({ title, author, priority, agree }) => ({
//   type: ADD_TODO,
//   payload: { title, author, priority, agree, id: Date.now(), status: false },
// });

// export const deleteTodo = (id) => ({
//   type: DELETE_TODO,
//   payload: id,
// });

// export const updateTodo = (index) => ({
//   type: UPDATE_TODO,
//   payload: index,
// });
