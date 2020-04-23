import React from "react";

const Card = ({ login, avatar_url, getUserInfo }) => {
  const openProfile = () => {
    getUserInfo(login);
  };

  return (
    <div className="card">
      <img src={avatar_url} alt={login} className="card-img-top " />
      <div className="card-body">
        <h5 className="card-title">{login}</h5>
        <button className="btn btn-primary" onClick={openProfile}>
          Open
        </button>
      </div>
    </div>
  );
};

export default Card;
