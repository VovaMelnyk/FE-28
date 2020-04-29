import axios from "axios";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const withCredentials = (url) => {
  return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
};

export const getUser = async (login) => {
  return await axios.get(
    withCredentials(`https://api.github.com/users/${login}?`)
  );
};

export const getUserRepos = async (login) => {
  return await axios.get(
    withCredentials(`https://api.github.com/users/${login}/repos?per_page=5&`)
  );
};

export const getUsers = async (name) => {
  return await axios.get(
    withCredentials(
      `https://api.github.com/search/users?q=${name}&per_page=9&page=1&`
    )
  );
};
