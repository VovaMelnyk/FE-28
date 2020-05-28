import { SET_TOKEN } from "../types";

export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: token,
});
