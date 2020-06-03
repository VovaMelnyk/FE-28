import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Form from "./Formik/Form";
// import Form from "./Redux-form/Form";

function App() {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <Form />
      </div>
    </div>
  );
}

export default App;
