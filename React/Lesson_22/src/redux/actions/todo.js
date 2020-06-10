import { ADD, DELETE } from "../constants/types";

export const addItem = (todo) => ({
  type: ADD,
  payload: todo,
});

export const deleteItem = (id) => ({
  type: DELETE,
  payload: id,
});
