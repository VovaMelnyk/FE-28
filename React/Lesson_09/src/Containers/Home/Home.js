import React, { useState, useEffect } from "react";
import Search from "../../Components/Search/Search";
import Card from "../../Components/Card/Card";
import { getUsers } from "../../helpers";
import queryString from "query-string";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);


  const inputChange = (e) => {
    if (!e.target.value) {
      setUsers([]);
    }
    setName(e.target.value);
  };

  const onSubmit = (e) => {
    if (e.key === "Enter") {
      getUsers(name).then((res) => setUsers(res.data.items));
      // history.push and change location search like obj
    }
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
                <Card {...user} />
              </div>
            ))}
        </>
      </div>
    </>
  );
};

export default Home;
