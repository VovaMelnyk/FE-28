import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// import Form from "./Formik/Form";
import Form from "./Redux-form/Form";

function App() {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <Form onSubmit={handleSubmit} initialValues={{ firstName: "User" }} />
      </div>
    </div>
  );
}

export default App;
