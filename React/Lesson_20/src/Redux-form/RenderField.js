import React from "react";

const RenderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <input
        {...input}
        placeholder={label}
        type={type}
        className="form-control"
      />
      {touched && error && <span className="invalid-feedback">{error}</span>}
    </div>
  </div>
);

export default RenderField;
