import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../types";

export const addTodo = ({title, author, priority}) => ({
  type: ADD_TODO,
  payload: {title, author, priority, status: false, id: Date.now},
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const updateTodo = (index) => ({
  type: UPDATE_TODO,
  payload: index,
});
