import { INCREMENT, DECREMENT, RESET } from "../types";
import { createAction } from "@reduxjs/toolkit";

export const plus = createAction(INCREMENT);

export const minus = createAction(DECREMENT);

export const reset = createAction(RESET);

console.log(reset());
console.log(reset);
