import React, { useState } from "react";

const initialState = { email: "", password: "" };

const Login = () => {
  const [user, setUser] = useState(initialState);
  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
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
    </div>
  );
};

export default Login;
