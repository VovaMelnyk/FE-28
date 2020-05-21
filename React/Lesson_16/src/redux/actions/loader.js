import {
  TODO_REQUEST_START,
  TODO_REQUEST_SUCSSES,
  TODO_DELETE_START,
  TODO_DELETE_SUCSSES,
} from "../types/index";

export const activeLoader = () => ({
  type: TODO_REQUEST_START,
});

export const inactiveLoader = () => ({
  type: TODO_REQUEST_SUCSSES,
});

export const deleteLoaderActive = () => ({
  type: TODO_DELETE_START,
});

export const deleteLoaderInactive = () => ({
  type: TODO_DELETE_SUCSSES,
});
