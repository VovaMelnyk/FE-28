import React from "react";
import { Link } from "react-router-dom";

const Card = ({ login, avatar_url }) => {
  return (
    <div className="card">
      <img src={avatar_url} alt={login} className="card-img-top " />
      <div className="card-body">
        <h5 className="card-title">{login}</h5>
        <Link to={`/profile/${login}`} className="btn btn-primary">
          Open
        </Link>
      </div>
    </div>
  );
};

export default Card;
