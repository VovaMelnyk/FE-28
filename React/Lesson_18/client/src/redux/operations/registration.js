import axios from "axios";
import { setUser } from "../actions/user";
import { setToken } from "../actions/token";

const options = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const signUp = (formData) => async (dispatch, getState) => {
  options.headers.autorization = getState().token
  const result = await axios.post(
    "http://localhost:4000/register",
    formData,
    options
  );
  const { id, email, token } = result.data.user;
  dispatch(setUser({ id, email }));
  dispatch(setToken(token));
  localStorage.setItem('token', JSON.stringify(token))
};
