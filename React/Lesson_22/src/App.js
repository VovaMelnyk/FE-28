import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "./redux/actions/todo";
import Basic from "./Basic.tsx";
function App() {
  const [value, setValue] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const todo = {
      text: value,
      id: Date.now(),
    };
    dispatch(addItem(todo));
    setValue("");
  };

  const deleteTodo = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          onChange={inputHandler}
          placeholder="Enter todo"
        />
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p>{todo.text}</p>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {/* <Basic /> */}
    </div>
  );
}

export default App;
