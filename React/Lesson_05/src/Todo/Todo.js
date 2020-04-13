import React from "react";
import "./Todo.css";
const Todo = ({ done }) => {
  return (
    <div className="Todo">
      <div>
        <p className={`Todo__name ${done && "done"}`}>Done</p>
        <p className={`Todo__priority ${done && "done"}`}>Hight priority</p>
        <p className={`Todo__author ${done && "done"}`}>Author</p>
      </div>
      <span className="Todo__remove">
        <i className="fas fa-trash" />
      </span>
    </div>
  );
};

export default Todo;
