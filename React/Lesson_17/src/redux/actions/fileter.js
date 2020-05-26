import { SET_ALL, SET_UNCOMPLETED, SET_COMPLETE } from "../types";

export const setAll = () => ({
  type: SET_ALL,
});

export const setComplete = () => ({
  type: SET_COMPLETE,
});

export const setUncompleted = () => ({
  type: SET_UNCOMPLETED,
});
