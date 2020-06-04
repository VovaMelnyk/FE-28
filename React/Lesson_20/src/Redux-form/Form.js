import React from "react";
import { Field, reduxForm } from "redux-form";
import RenderField from "./RenderField/RenderField";
import { validate } from "../Formik/validate";

const Registration = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up Redux-form</h3>

      <Field
        component={RenderField}
        type="text"
        name="firstName"
        label="First Name"
      />

      <Field
        component={RenderField}
        type="text"
        name="lastName"
        label="Last Name"
      />

      <Field component={RenderField} type="email" name="email" label="Email" />

      <Field
        component={RenderField}
        type="password"
        name="password"
        label="Password"
      />

      <button type="submit" className="btn btn-primary btn-block">
        Sign Up
      </button>
    </form>
  );
};

export default reduxForm({
  form: "Registration",
  validate,
})(Registration);
