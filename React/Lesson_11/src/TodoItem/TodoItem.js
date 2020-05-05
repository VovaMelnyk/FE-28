import React from "react";
import "./TodoItem.css";
import withToggle from "../hoc/withToggle";
const TodoItem = ({ id, text, removeItem, open, toggle }) => {
  const deleteItem = () => {
    removeItem(id);
  };
  return (
    <li className="item">
      {open ? (
        <input type="text" value={text} />
      ) : (
        <span className="item__text">{text}</span>
      )}

      <div className="item__action">
        <button className="item__btn" onClick={toggle}>
          Edit
        </button>
        <button className="item__btn" onClick={deleteItem}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default withToggle(TodoItem);
