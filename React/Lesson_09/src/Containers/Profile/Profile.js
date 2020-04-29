import React, { useEffect, useState } from "react";
import Repos from "../../Components/Repos/Repos";
import { getUser } from "../../helpers";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [singleUser, setSingleUser] = useState({});
  const [loading, setLoading] = useState(true);

  const userName = useParams().login;

  // props.match.params.login

  useEffect(() => {
    getUser(userName)
      .then((response) => setSingleUser(response.data))
      .then(() => setLoading(false));
  }, [userName]);

  if (loading) {
    return <p className="text-center">Загрузка...</p>;
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = singleUser;

  return (
    <>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img src={avatar_url} alt={name} style={{ width: "150px" }} />
              <h1>{name}</h1>
              {location && <p>Geolocation: {location}</p>}
            </div>
            <div className="col">
              {bio && (
                <>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </>
              )}
              <a
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark mb-4"
              >
                Open profile
              </a>
              <ul>
                {login && (
                  <li>
                    <strong>Username: </strong> {login}
                  </li>
                )}

                {company && (
                  <li>
                    <strong>Company: </strong> {company}
                  </li>
                )}

                {blog && (
                  <li>
                    <strong>Website: </strong> {blog}
                  </li>
                )}
              </ul>

              <div className="badge badge-primary">Подписчики: {followers}</div>
              <div className="badge badge-success">Подписан: {following}</div>
              <div className="badge badge-info">
                Репозитории: {public_repos}
              </div>
              <div className="badge badge-dark">Gists: {public_gists}</div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-primary">Show Repos</button>
            </div>
          </div>
        </div>
        {/* <Repos /> */}
      </div>
    </>
  );
};

export default Profile;
