import React from "react";
import "./TodoItem.css";
const TodoItem = ({ id, text, removeItem }) => {
  const deleteItem = () => {
    removeItem(id);
  };
  return (
    <li className="item">
      <span className="item__text">{text}</span>

      <div className="item__action">
        <button className="item__btn">Edit</button>
        <button className="item__btn" onClick={deleteItem}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
