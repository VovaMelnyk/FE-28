import { ADD, DELETE, Todo, TodoActionsType } from "../constants/types";

export const addItem = (todo: Todo): TodoActionsType => ({
  type: ADD,
  payload: todo,
});

export const deleteItem = (id: number): TodoActionsType => ({
  type: DELETE,
  payload: id,
});
