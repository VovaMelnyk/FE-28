import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <form>
      <h3>Sign In</h3>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          autoComplete="off"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          autoComplete="off"
        />
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Submit
      </button>
    </form>
  );
};

export default Login;
