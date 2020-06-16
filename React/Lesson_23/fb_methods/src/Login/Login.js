import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/operations";

const initialState = { email: "", password: "" };

const Login = () => {
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
    setUser(initialState);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          onChange={inputHandler}
          value={user.email}
        />
        <input
          type="password"
          name="password"
          onChange={inputHandler}
          value={user.password}
        />
        <button>Login</button>
      </form>
      <NavLink to="/registration">Switch to register form</NavLink>
    </div>
  );
};

export default Login;
