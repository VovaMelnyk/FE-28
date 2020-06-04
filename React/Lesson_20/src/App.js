import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// import Form from "./Formik/Form";
import Form from "./Redux-form/Form";

function App() {
  const submit = (values) => console.log(values);
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <Form
          onSubmit={submit}
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
        />
      </div>
    </div>
  );
}

export default App;
