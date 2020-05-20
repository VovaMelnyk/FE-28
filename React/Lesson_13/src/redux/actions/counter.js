
import { INCREMENT, DECREMENT, RESET } from "../types";

export const plus = (number) => ({
  type: INCREMENT,
  payload: number
});

export const minus = () => ({
  type: DECREMENT,
});

export const reset = () => ({
  type: RESET,
});

