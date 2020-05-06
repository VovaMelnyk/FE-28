import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, CLEAR_ITEM } from "./types";

export const addItem = (task) => ({
  type: ADD_ITEM,
  payload: task,
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: id,
});

export const clearItems = () => ({
  type: CLEAR_ITEM,
});

export const editItem = (id) => ({
  type: EDIT_ITEM,
  payload: id,
});
