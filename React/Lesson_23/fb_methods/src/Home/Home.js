import React from "react";
import TodoList from "../TodoList/TodoList";
import { auth } from "../config";
import { deleteUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  const userSignOut = () => {
    auth.signOut();
    dispatch(deleteUser());
  };

  return (
    <div>
      <h1>Home</h1>
      <TodoList />
      <button onClick={userSignOut}>Exit</button>
    </div>
  );
};

export default Home;
