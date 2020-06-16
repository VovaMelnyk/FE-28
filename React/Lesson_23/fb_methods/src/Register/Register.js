import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/operations";

const initialState = { email: "", password: "" };

const Register = () => {
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user))
    setUser(initialState);
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={inputHandler}
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={inputHandler}
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
