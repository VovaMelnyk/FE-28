import React, { useState } from "react";

const TodoList = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const valueHandler = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const item = {
      text: value,
      id: Date.now(),
    };
    setList([...list, item]);
    setValue("");
  };

  const deleteItem = (id) => {
    setList(list.filter((el) => el.id !== id));
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
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
