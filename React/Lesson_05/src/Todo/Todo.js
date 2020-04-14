import React from "react";
import "./Todo.css";
const Todo = ({
  status,
  title,
  author,
  priority,
  deleteTodo,
  id,
  updateTodo,
  index,
}) => {

  const deleteItem = () => {
    deleteTodo(id);
  };
  
  const updateItem = () => {
    updateTodo(index);
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
      {/* <span className="Todo__remove" onClick={() => deleteTodo(id)}>
        <i className="fas fa-trash" />
      </span> */}
    </div>
  );
};

export default Todo;
