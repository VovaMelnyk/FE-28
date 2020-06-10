import React, { useState, ChangeEvent, FormEvent, ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "./redux/actions/todo";
import { RootState } from "./redux/reducers";
import Basic from "./Basic";
function App(): ReactElement {
  const [value, setValue] = useState("");
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const todo = {
      text: value,
      id: Date.now(),
    };
    dispatch(addItem(todo));
    setValue("");
  };

  const deleteTodo = (id: number) => {
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
