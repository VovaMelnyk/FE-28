import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../types";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return [...state, payload];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== payload);
    case UPDATE_TODO:
      return update(state, payload);
    default:
      return state;
  }
};

const update = (state, payload) => {
  // const task = state[payload];
  // task.status = true;
  // const newState = [...state];
  // newState.splice(payload, 1, task);
  // return newState;
const newState = [...state];
newState[payload] = { ...newState[payload], status: true };
return newState;
};
