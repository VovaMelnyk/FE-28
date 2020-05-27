import React, { useState } from "react";
import "./Registration.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { registerUser } from "../../redux/operations";
import { useDispatch } from "react-redux";

const initialFormState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
};

const Registration = () => {
  const [form, setForm] = useState(initialFormState);
  const dispatch = useDispatch();

  const inputHandler = ({ target }) => {
    const name = target.name;
    const value = target.value;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(form));
  };

  return (
    <form onSubmit={onSubmit}>
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
