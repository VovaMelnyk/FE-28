import { createSelector } from "reselect";
export const userSelector = (state) => state.user;

export const userName = (state) => userSelector(state).name;

export const userCountry = (state) => userSelector(state).country.name;

export const userStatus = (state) => userSelector(state).account.status;

export const todoSelector = (state) => state.todo;

export const typeSelector = (state) => state.type;

// export const totalTodoCount = (state) => todoSelector(state).length;

// export const totalTodoCount = (state) => {
//   console.log("render");
//   return todoSelector(state).length;
// };

export const totalTodoCount = createSelector(todoSelector, (todos) => {
  console.log("render");
  return todos.length;
});

export const hightTodoCount = createSelector(
  [todoSelector],
  (todos) => todos.filter((el) => el.priority === "High").length
);

// export const hightTodoCount = (state) =>
//   todoSelector(state).filter((todo) => todo.priority === "High").length;

export const mediumTodoCount = (state) =>
  todoSelector(state).filter((todo) => todo.priority === "Medium").length;

export const lowTodoCount = (state) =>
  todoSelector(state).filter((todo) => todo.priority === "Low").length;

export const todoSelectorWithTypes = createSelector(
  [todoSelector, typeSelector],
  (todos, type) => {
    switch (type) {
      case "all":
        return todos;
      case "completed":
        return todos.filter((todo) => todo.status);
      case "uncompleted":
        return todos.filter((todo) => !todo.status);
      default:
        break;
    }
  }
);
