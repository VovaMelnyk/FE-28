import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  writeDataToFirestore,
  getDataFromFireStore,
  deleteDataFromFireStore,
} from "../redux/operations";
const TodoList = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataFromFireStore("todoList"));
  }, [dispatch]);

  const list = useSelector((state) => state.list);

  const valueHandler = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const item = {
      text: value,
    };
    dispatch(writeDataToFirestore("todoList", item));
    setValue("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="text" onChange={valueHandler} value={value} />
        <button>Add</button>
      </form>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.text}{" "}
            <button
              onClick={() =>
                dispatch(deleteDataFromFireStore("todoList", item.id))
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
