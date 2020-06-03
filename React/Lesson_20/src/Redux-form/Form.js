import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./reduxFormValidate";
import RenderField from "./RenderField";
const Registration = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up Redux Form</h3>
      <Field
        name="firstName"
        type="text"
        label="First Name"
        component={RenderField}
      />
      <Field
        name="lastName"
        type="text"
        label="Last Name"
        component={RenderField}
      />
      <Field name="email" type="email" label="Email" component={RenderField} />
      <Field
        name="password"
        type="password"
        label="Password"
        component={RenderField}
      />
      <button type="submit" className="btn btn-primary btn-block">
        Sign Up
      </button>
    </form>
  );
};

export default reduxForm({
  form: "signUp",
  validate,
})(Registration);
