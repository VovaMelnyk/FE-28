import { INCREMENT, DECREMENT, RESET } from "../types";

export const plus = () => ({
  type: INCREMENT,
});

export const minus = () => ({
  type: DECREMENT,
});

export const reset = () => ({
  type: RESET,
});
