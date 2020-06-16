import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  writeDataToFireStore,
  readDataFromFireStore,
  deleteDataFromFireStore,
} from "../redux/operations";

const TodoList = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);

  useEffect(() => {
    dispatch(readDataFromFireStore("todoCollection"));
  }, []);

  const valueHandler = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const item = {
      text: value,
    };
    dispatch(writeDataToFireStore("todoCollection", item));
    setValue("");
  };

  const deleteItem = (dbName, id) => {
    dispatch(deleteDataFromFireStore(dbName, id));
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
            <button onClick={() => deleteItem("todoCollection", item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
