import React from "react";
import { useFormik, Formik, Field, Form, ErrorMessage } from "formik";
import validate from "./validate";
import validationSchema from "./validate";

const Registration = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    // validate,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h3>Sign Up Formik</h3>

      <div className="form-group">
        <label htmlFor="firstName">First name</label>
        <input
          id="firstName"
          type="text"
          className="form-control"
          placeholder="First name"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="invalid-feedback">{formik.errors.firstName}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last name</label>
        <input
          id="lastName"
          type="text"
          className="form-control"
          placeholder="Last name"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="invalid-feedback">{formik.errors.lastName}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          autoComplete="off"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="invalid-feedback">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          autoComplete="off"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="invalid-feedback">{formik.errors.password}</div>
        ) : null}
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Sign Up
      </button>
    </form>
  );
};

export default Registration;

// const Registration = () => {
//   return (
//     <>
//       <Formik
//         initialValues={{
//           firstName: "",
//           lastName: "",
//           email: "",
//           password: "",
//         }}
//         // validationSchema={validationSchema}
//         validate={validate}
//         onSubmit={(values) => {
//           console.log(values);
//         }}
//       >
//         <Form>
//           <h3>Sign Up Formik</h3>

//           <div className="form-group">
//             <label htmlFor="firstName">First name</label>
//             <Field
//               name="firstName"
//               type="text"
//               className="form-control"
//               placeholder="First name"
//             />
//             <ErrorMessage
//               name="firstName"
//               component="div"
//               className="invalid-feedback"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="lastName">Last name</label>
//             <Field
//               name="lastName"
//               className="form-control"
//               type="text"
//               placeholder="Last name"
//             />
//             <ErrorMessage
//               name="lastName"
//               component="div"
//               className="invalid-feedback"
//             />
//           </div>

//           <div className="form-group">
//             <label>Email address</label>
//             <Field
//               name="email"
//               type="email"
//               className="form-control"
//               placeholder="Enter email"
//             />
//             <ErrorMessage
//               name="email"
//               component="div"
//               className="invalid-feedback"
//             />
//           </div>

//           <div className="form-group">
//             <label>Password</label>
//             <Field
//               type="password"
//               name="password"
//               className="form-control"
//               placeholder="Enter password"
//             />
//             <ErrorMessage
//               name="password"
//               component="div"
//               className='invalid-feedback'
//             />
//           </div>

//           <button type="submit" className="btn btn-primary btn-block">
//             Sign Up
//           </button>
//         </Form>
//       </Formik>
//     </>
//   );
// };

// export default Registration;
