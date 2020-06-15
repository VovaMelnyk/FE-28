import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../config";

const initialState = { email: "", password: "" };

const Login = () => {
  const [user, setUser] = useState(initialState);
  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = user;
    auth.signInWithEmailAndPassword(email, password);
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
        <NavLink to="/registration">To Registration</NavLink>
      </form>
    </div>
  );
};

export default Login;
