import { diff } from "deep-object-diff";
export const logger = (store) => (next) => (action) => {
  console.group(action.type);
  const oldState = store.getState();
  console.log("old state", oldState);
  console.info(`dispatching`, action);
  let result = next(action);
  const newState = store.getState();
  console.log("new state", newState);
  console.info("state diff", diff(oldState, newState));
  console.groupEnd();
  return result;
};
