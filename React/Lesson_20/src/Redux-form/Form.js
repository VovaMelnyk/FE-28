import React, { useState } from "react";

const formState = { firstName: "", lastName: "", email: "", password: "" };

const Registration = () => {
  const [form, setForm] = useState(formState);

  const inputHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm({ ...form, [name]: value });
  };

  return (
    <form>
      <h3>Sign Up Redux-form</h3>

      <div className="form-group">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          onChange={inputHandler}
          name="firstName"
        />
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          onChange={inputHandler}
          name="lastName"
        />
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          autoComplete="off"
          onChange={inputHandler}
          name="email"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          autoComplete="off"
          onChange={inputHandler}
          name="password"
        />
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Sign Up
      </button>
    </form>
  );
};

export default Registration;
