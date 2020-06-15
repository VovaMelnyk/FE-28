import React, { useState } from "react";
import { auth } from "../config";
const initialState = { email: "", password: "" };

const Register = () => {
  const [user, setUser] = useState(initialState);

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerUser = async () => {
    const { email, password, name } = user;
    await auth.createUserWithEmailAndPassword(email, password);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    registerUser();
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
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={inputHandler}
          placeholder="password"
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
