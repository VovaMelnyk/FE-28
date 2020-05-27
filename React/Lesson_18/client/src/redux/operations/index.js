import axios from "axios";
import { registrationRequest, registrationSuccess } from "../actions/register";
import { tokenSet } from "../actions/token";

const options = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const registerUser = (user) => async (dispatch) => {
  dispatch(registrationRequest());
  const response = await axios.post(
    "http://localhost:4000/register",
    user,
    options
  );
  const { email, firstName, lastName, id, token } = response.data.user;
  dispatch(registrationSuccess({ email, firstName, lastName, id }));
  dispatch(tokenSet(token));
};
