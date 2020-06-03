import * as Yup from "yup";

export default (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (!values.lastName > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 4) {
    errors.password = "Must be 4 characters or more";
  }

  return errors;
};

// export default Yup.object({
//   firstName: Yup.string()
//     .max(15, "Must be 15 characters or less")
//     .required("Required"),
//   lastName: Yup.string()
//     .max(20, "Must be 20 characters or less")
//     .required("Required"),
//   email: Yup.string().email("Invalid email address").required("Required"),
//   password: Yup.string()
//     .min(4, "Must be 4 characters or more")
//     .required("Required"),
// });
