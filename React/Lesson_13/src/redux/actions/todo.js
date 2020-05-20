import axios from "axios";
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../types";

// export const addTodo = ({ title, author, priority, agree }) => ({
//   type: ADD_TODO,
//   payload: { title, author, priority, agree, id: Date.now(), status: false },
// });

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const updateTodo = (index) => ({
  type: UPDATE_TODO,
  payload: index,
});

// export const updateTodo = (index) => ({
//   type: UPDATE_TODO,
//   payload: index,
// });

export const addTodoAsync = ({ title, author, priority, agree }) => async (
  dispatch
) => {
  const todo = {
    title,
    author,
    priority,
    agree,
    // id: Date.now(),
    status: false,
  };
  const result = await axios.post("http://localhost:5001/todos", todo, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(result);
  dispatch(addTodo(todo));
};

export const asyncUpdate = (id) => async (dispatch, getState) => {
  console.log(getState());
  const result = await axios.put(
    `http://localhost:5001/todos/1`,
    {
      title: "sfsdfds",
      author: "sdfsdfs",
      priority: "Low",
      agree: false,
      status: true,
      id: 1,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(result);
};
