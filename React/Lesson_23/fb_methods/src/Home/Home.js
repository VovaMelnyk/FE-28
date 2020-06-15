import React from "react";
import TodoList from "../TodoList/TodoList";
import { auth } from "../config";

const Home = () => {
  const exit = () => {
    auth.signOut();
  };

  return (
    <div>
      <h1>Home</h1>
      <TodoList />
      <button onClick={exit}>Exit</button>
    </div>
  );
};

export default Home;
