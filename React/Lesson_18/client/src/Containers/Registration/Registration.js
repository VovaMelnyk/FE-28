import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Registration.css";
import { signUp } from "../../redux/operations/registration";

const formState = { firstName: "", lastName: "", email: "", password: "" };

const Registration = () => {
  const [form, setForm] = useState(formState);
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm({ ...form, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(form));
  };

  return (
    <form onSubmit={formSubmit}>
      <h3>Sign Up</h3>

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
      <p className="forgot-password text-right">
        Already registered <Link to="/login">Sign in</Link>
      </p>
    </form>
  );
};

export default Registration;
