import React from "react";
import { useFormik, Formik, Form, ErrorMessage, Field } from "formik";
import { validate, validationSchema } from "./validate";
// const Registration = () => {
//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//     },
//     onSubmit: (values) => {
//       console.log("values", values);
//     },
//     // validate,
//     validationSchema,
//   });

//   console.log(formik);

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <h3>Sign Up Formik</h3>

//       <div className="form-group">
//         <label htmlFor="firstName">First name</label>
//         <input
//           id="firstName"
//           type="text"
//           className="form-control"
//           placeholder="First name"
//           name="firstName"
//           value={formik.values.firstName}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         {formik.touched.firstName && formik.errors.firstName ? (
//           <div className="invalid-feedback">{formik.errors.firstName}</div>
//         ) : null}
//       </div>

//       <div className="form-group">
//         <label htmlFor="lastName">Last name</label>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Last name"
//           name="lastName"
//           id="lastName"
//           value={formik.values.lastName}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         {formik.touched.lastName && formik.errors.lastName ? (
//           <div className="invalid-feedback">{formik.errors.lastName}</div>
//         ) : null}
//       </div>

//       <div className="form-group">
//         <label htmlFor="email">Email address</label>
//         <input
//           id="email"
//           type="email"
//           className="form-control"
//           placeholder="Enter email"
//           autoComplete="off"
//           name="email"
//           value={formik.values.email}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         {formik.touched.email && formik.errors.email ? (
//           <div className="invalid-feedback">{formik.errors.email}</div>
//         ) : null}
//       </div>

//       <div className="form-group">
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           className="form-control"
//           placeholder="Enter password"
//           autoComplete="off"
//           name="password"
//           id="password"
//           value={formik.values.password}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         {formik.touched.password && formik.errors.password ? (
//           <div className="invalid-feedback">{formik.errors.password}</div>
//         ) : null}
//       </div>

// <button type="submit" className="btn btn-primary btn-block">
//   Sign Up
// </button>
//     </form>
//   );
// };

// export default Registration;

const Registration = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      onSubmit={(values) => {
        console.log("values", values);
      }}
      validationSchema={validationSchema}
      // validate={validate}
    >
      <Form>
        <h3>Sign Up Formik</h3>

        <div className="form-group">
          <label htmlFor="firstName">First name</label>
          <Field
            type="text"
            className="form-control"
            placeholder="First name"
            name="firstName"
          />
          <ErrorMessage
            name="firstName"
            component="div"
            className="invalid-feedback"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last name</label>
          <Field
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Last name"
          />
          <ErrorMessage
            component="div"
            name="lastName"
            className="invalid-feedback"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <Field
            type="email"
            placeholder="Enter email"
            name="email"
            className="form-control"
          />

          <ErrorMessage
            component="div"
            name="email"
            className="invalid-feedback"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Password</label>
          <Field
            type="password"
            placeholder="Enter password"
            name="password"
            className="form-control"
          />

          <ErrorMessage
            component="div"
            name="password"
            className="invalid-feedback"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};

export default Registration;
