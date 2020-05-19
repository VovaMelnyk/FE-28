import { createAction } from "@reduxjs/toolkit";

export const plus = createAction("INCREMENT");

export const minus = createAction("DECREMENT");

export const reset = createAction("RESET");

// import { INCREMENT, DECREMENT, RESET } from "../types";

// export const plus = (number) => ({
//   type: INCREMENT,
//   payload: number
// });

// export const minus = () => ({
//   type: DECREMENT,
// });

// export const reset = () => ({
//   type: RESET,
// });

// console.log(plus(5));
// console.log(plus);
