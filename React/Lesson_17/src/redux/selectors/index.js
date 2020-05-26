import { createSelector } from "reselect";

// user selectors
export const userSelector = (state) => state.user;

// expor const userNameSelector = state =>  userSelector(state).name;

export const userNameSelector = createSelector(
  userSelector,
  (data) => data.name
);

// export const userCountrySelector = (state) =>
//   userSelector(state).country.string.name;

export const userCountrySelector = createSelector(
  userSelector,
  (data) => data.country.string.name
);

// export const userStatusSelector = (state) => userSelector(state).account.status;

export const userStatusSelector = createSelector(
  userSelector,
  (data) => data.account.status
);

// todo selectors

export const todoSelector = (state) => state.todo;

// export const todoTotalCount = (state) => todoSelector(state).length;

export const todoTotalCount = createSelector(todoSelector, (arr) => arr.length);

// export const todoHighCount = (state) =>
//   todoSelector(state).filter((todo) => todo.priority === "High").length;

export const todoHighCount = createSelector(
  todoSelector,
  (arr) => arr.filter((todo) => todo.priority === "High").length
);

// export const todoMediumCount = (state) =>
//   todoSelector(state).filter((todo) => todo.priority === "Medium").length;

export const todoMediumCount = createSelector(
  todoSelector,
  (arr) => arr.filter((todo) => todo.priority === "Medium").length
);

// export const todoLowCount = (state) =>
//   todoSelector(state).filter((todo) => todo.priority === "Low").length;

export const todoLowCount = createSelector(
  todoSelector,
  (arr) => arr.filter((todo) => todo.priority === "Low").length
);

export const filterSelector = (state) => state.filter;

// export const todoFilterSelector = createSelector(
//   todoSelector,
//   filterSelector,
//   (arr, filter) => {
//     switch (filter) {
//       case "all":
//         return arr;
//       case "complete":
//         return arr.filter((el) => el.status);
//       case "uncompleted":
//         return arr.filter((el) => !el.status);
//       default:
//         break;
//     }
//   }
// );

export const todoFilterSelector = createSelector(
  [todoSelector, filterSelector],
  (arr, filter) => {
    switch (filter) {
      case "all":
        return arr;
      case "complete":
        return arr.filter((el) => el.status);
      case "uncompleted":
        return arr.filter((el) => !el.status);
      default:
        break;
    }
  }
);
