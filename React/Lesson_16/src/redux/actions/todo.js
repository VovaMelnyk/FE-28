import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../types";
import axios from "axios";
import {
  activeLoader,
  inactiveLoader,
  deleteLoaderActive,
  deleteLoaderInactive,
} from "./loader";
import { setError, resetError, setDeleteError } from "./error";

export const addTodo = (data) => ({
  type: ADD_TODO,
  payload: data,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const updateTodo = (index) => ({
  type: UPDATE_TODO,
  payload: index,
});

const option = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const asyncAddTodo = ({ title, author, priority, agree }) => async (
  dispatch
) => {
  dispatch(activeLoader());
  const todo = { title, author, priority, agree, status: false };
  try {
    dispatch(resetError());
    const result = await axios.post("http://localhost:5001/todo", todo, option);
    dispatch(addTodo(result.data));
  } catch (error) {
    dispatch(setError());
  } finally {
    dispatch(inactiveLoader());
  }
};

export const asyncDeleteTodo = (id) => (dispatch) => {
  dispatch(deleteLoaderActive());
  axios
    .delete(`http://localhost:5001/todo/${id}`)
    .then((response) => dispatch(deleteTodo(id)))
    .catch((error) => dispatch(setDeleteError()))
    .finally(() => dispatch(deleteLoaderInactive()));
};

// 1) submit => addTodo => reducer => store => render // without async code
// 2) submit => asyncAddTodo => axios.post => addTodo => reducer => store => render
