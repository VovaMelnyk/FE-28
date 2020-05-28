import { REGISTRATION_SUCCESS } from "../types";

export const setUser = (user) => ({
  type: REGISTRATION_SUCCESS,
  payload: user,
});
