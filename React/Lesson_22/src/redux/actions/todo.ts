import { ADD, DELETE, Todo, TodoActionsInterface } from "../constants/types";

export const addItem = (todo: Todo): TodoActionsInterface => ({
  type: ADD,
  payload: todo,
});

export const deleteItem = (id: number): TodoActionsInterface => ({
  type: DELETE,
  payload: id,
});
