import React from "react";
import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";
const TodoList = ({ list, removeItem }) => {
  return (
    <ul>
      {list.map((todo) => (
        <TodoItem key={todo.id} {...todo} removeItem={removeItem} />
      ))}
    </ul>
  );
};

export default TodoList;
