import * as Yup from "yup";

export const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Name must be less then 15";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName > 20) {
    errors.lastName = "Name must be less then 20";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 4) {
    errors.password = "Password must have 4 symbols or more";
  }

  return errors;
};

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Name must be less then 15")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Last name must be less then 20")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(4, "Password must have 4 symbols or more")
    .required("Required"),
});
