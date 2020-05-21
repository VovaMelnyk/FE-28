import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  updateTodo,
  asyncDeleteTodo,
} from "../../../redux/actions/todo";
import "./Todo.css";
const Todo = ({ status, title, author, priority, id, index }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(asyncDeleteTodo(id));
  };

  const updateItem = () => {
    dispatch(updateTodo(index));
  };

  return (
    <div className="Todo">
      <div onClick={updateItem}>
        <p className={`Todo__name ${status && "done"}`}>{title}</p>
        <p className={`Todo__priority ${status && "done"}`}>
          {priority} priority
        </p>
        <p className={`Todo__author ${status && "done"}`}>{author}</p>
      </div>
      <span className="Todo__remove" onClick={deleteItem}>
        <i className="fas fa-trash" />
      </span>
    </div>
  );
};

export default Todo;
