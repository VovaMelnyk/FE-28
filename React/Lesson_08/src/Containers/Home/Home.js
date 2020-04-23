import React, { useState } from "react";
import Search from "../../Components/Search/Search";
import Card from "../../Components/Card/Card";
import axios from "axios";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const withCredentials = (url) => {
  return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
};

const Home = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  /**
   * update code
   * Додано перевірку яка чистить список коли очистили інпут і скидає поточну сторінку
   * до початкового значення
   * 30 - 33 рядки
   */

  const inputChange = (e) => {
    if (!e.target.value) {
      setUsers([]);
      setCurrentPage(1)
    }
    setName(e.target.value);
  };

  const onSubmit = (e) => {
    if (e.key === "Enter") {
      getUsers();
    }
  };
  /**
   * update code
   * useCallback видалений так як запит за новими картинками з useEffect перемістився в getMoreImage
   * Доданий параметр page - нова сторінка по якій треба робити запит
   * 49 і 54 рядочки
   * 57 рядок постійне оновлення списку (без різниці чи перший запит чи ні)
   */
  const getUsers = async (page) => {
    setLoader(true);
    try {
      const response = await axios.get(
        withCredentials(
          `https://api.github.com/search/users?q=${name}&per_page=9&page=${page}&`
        )
      );
      setUsers([...users, ...response.data.items]);
    } catch (error) {
      setError(true);
    } finally {
      setLoader(false);
    }
  };

  const getUser = async (login) => {
    setLoader(true);
    try {
      const response = await axios.get(
        withCredentials(`https://api.github.com/users/${login}?`)
      );
      setUser(response.data);
    } catch (error) {
      setError(true);
    } finally {
      setLoader(false);
    }
  };

  const getUserRepos = async (login) => {
    setLoader(true);
    try {
      const response = await axios.get(
        withCredentials(
          `https://api.github.com/users/${login}/repos?per_page=5&`
        )
      );
      setRepos(response.data);
    } catch (error) {
      setError(true);
    } finally {
      setLoader(false);
    }
  };

  const getUserInfo = (login) => {
    getUser(login);
    getUserRepos(login);
  };

  /**
   * update code
   * ф-я changeCurrentPage переіменована на getMoreImage
   * Визначається новий номер сторінки і передається для запиту і для зміни стейта
   * 
   */

  const getMoreImage = () => {
    const newPage = currentPage + 1;
    getUsers(newPage);
    setCurrentPage(newPage);
  };

  return (
    <>
      <Search inputChange={inputChange} name={name} onSubmit={onSubmit} />
      <div className="row">
        <>
          {loader && <p>Loading ...</p>}
          {error && <p>Request error</p>}
          {!loader &&
            !error &&
            users.map((user) => (
              <div className="col-sm-4 mb-4" key={user.id}>
                <Card {...user} getUserInfo={getUserInfo} />
              </div>
            ))}
          {!!users.length && (
            /**
             * update code
             * переіменована changeCurrentPage на getMoreImage
             */
            <button className="btn btn-danger" onClick={getMoreImage}>
              Show more
            </button>
          )}
        </>
      </div>
    </>
  );
};

export default Home;
