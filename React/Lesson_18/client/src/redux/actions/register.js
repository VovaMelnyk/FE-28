import {
  REGISTRATION_ERROR,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
} from "../types";

export const registrationRequest = () => ({
  type: REGISTRATION_REQUEST,
});

export const registrationSuccess = (user) => ({
  type: REGISTRATION_SUCCESS,
  payload: user,
});

export const registrationError = (error) => ({
  type: REGISTRATION_ERROR,
  payload: error,
});
