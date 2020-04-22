import React, { useContext } from "react";
import Search from "../../Components/Search/Search";
import Card from "../../Components/Card/Card";
import { GithubContext } from "../../Context/github/githubContext";

const Home = () => {
  const { loading, users } = useContext(GithubContext);
  return (
    <>
      <Search />
      <div className="row">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          users.map((user) => (
            <div className="col-sm-4 mb-4" key={user.id}>
              <Card {...user} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
