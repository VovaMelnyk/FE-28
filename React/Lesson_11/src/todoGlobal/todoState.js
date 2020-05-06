import React, { useReducer } from "react";
import TodoContext from "./todoContext";
import rootReducer from "./todoReducer";
import { addItem, deleteItem, clearItems } from "./todoAction";

const TodoState = ({ children }) => {
  const initialState = [];
  const [state, dispatch] = useReducer(rootReducer, initialState);

  const addTask = (value) => {
    const task = {
      id: Date.now(),
      text: value,
    };
    dispatch(addItem(task));
  };

  const deleteTask = (id) => {
    dispatch(deleteItem(id));
  };

  const clear = () => {
    dispatch(clearItems());
  };

  return (
    <TodoContext.Provider value={{ state, addTask, deleteTask, clear }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
