import { TODO_REQUEST_ERROR, ERROR_RESET, DELETE_ERROR } from "../types/index";

export const setError = () => ({
  type: TODO_REQUEST_ERROR,
});

export const setDeleteError = () => ({
  type: DELETE_ERROR,
});

export const resetError = () => ({
  type: ERROR_RESET,
});
