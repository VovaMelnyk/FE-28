import React from "react";
import TodoList from "../TodoList/TodoList";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <TodoList />
      <button>Exit</button>
    </div>
  );
};

export default Home;
