import React, { useState } from "react";
import Form from "../Form/Form";
import Todo from "../Todo/Todo";
import "./TodoList.css";
import HookForm from "../HookForm/HookForm";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("all");

  const filterTasks = () => {
    switch (filter) {
      case "all":
        return todoList;
      case "completed":
        return todoList.filter((todo) => todo.status === true);
      case "uncompleted":
        return todoList.filter((todo) => todo.status === false);
      default:
        break;
    }
  };

  const changeFilter = (e) => {
    const type = e.target.dataset.filter;
    setFilter(type);
  };

  const addTodo = (todo) => {
    setTodoList([...todoList, todo]);
  };

  const deleteTodo = (id) => {
    const newState = todoList.filter((todo) => todo.id !== id);
    setTodoList(newState);
  };

  const updateTodo = (index) => {
    const task = todoList[index];
    task.status = true;
    const newState = [...todoList];
    newState.splice(index, 1, task);
    setTodoList(newState);
  };

  return (
    <div className="TodoList">
      <h1 className="TodoList__title">Todo List</h1>
      {/* <Form addTodo={addTodo} /> */}
      <HookForm addTodo={addTodo}/>
      <ul className="TodoList__todos">
        {filterTasks().length ? (
          filterTasks().map((todo, index) => (
            <li key={todo.id}>
              <Todo
                {...todo}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
                index={index}
              />
            </li>
          ))
        ) : (
          <li>No tasks</li>
        )}
      </ul>
      <div className="filters">
        <button
          className="NewTodoForm__submit"
          data-filter="all"
          onClick={changeFilter}
        >
          All
        </button>
        <button
          className="NewTodoForm__submit"
          data-filter="completed"
          onClick={changeFilter}
        >
          Completed
        </button>
        <button
          className="NewTodoForm__submit"
          data-filter="uncompleted"
          onClick={changeFilter}
        >
          Uncompleted
        </button>
      </div>
    </div>
  );
};

export default TodoList;
