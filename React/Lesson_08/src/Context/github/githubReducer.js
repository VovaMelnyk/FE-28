import {
  SEARCH_USERS,
  GET_REPOS,
  GET_USER,
  SET_LOADING,
  CLEAR_USERS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return { ...state, users: action.payload, loading: false };
    case GET_REPOS:
      return { ...state, repos: action.payload, loading: false };
    case GET_USER:
      return { ...state, user: action.payload, loading: false };
    case SET_LOADING:
      return { ...state, loading: true };
    case CLEAR_USERS:
      return { ...state, users: [] };
    default:
      return state;
  }
};
