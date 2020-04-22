import React from "react";
import Search from "../../Components/Search/Search";
import Card from "../../Components/Card/Card";

const Home = () => {
  return (
    <>
      <Search />
      <div className="row">
        <>
          {[].map((user) => (
            <div className="col-sm-4 mb-4" key={user.id}>
              <Card {...user} />
            </div>
          ))}
          <button className="btn btn-danger">Show more</button>
        </>
      </div>
    </>
  );
};

export default Home;
