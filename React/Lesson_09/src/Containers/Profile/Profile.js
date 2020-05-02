import React, { useEffect, useState } from "react";
import Repos from "../../Components/Repos/Repos";
import { getUser } from "../../helpers";
import { useParams, Switch, Route } from "react-router-dom";
import {
  NavLink,
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

const Profile = (props) => {
  const [singleUser, setSingleUser] = useState({});
  const [loading, setLoading] = useState(true);

  const userName = useParams().login;

  const history = useHistory();
  const locationState = useLocation();

  console.log(props);

  useEffect(() => {
    getUser(userName)
      .then((response) => setSingleUser(response.data))
      .then(() => setLoading(false));
  }, [userName]);

  const showRepos = () => {
    props.history.push(`${props.match.url}/repos`); // замінив props.location.pathname
  };

  const goBack = () => {
    console.log(history);
    history.goBack();
    // history.push({ ...locationState.state.from });
  };

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
      <button className="btn btn-danger" onClick={goBack}>
        Go back
      </button>
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
              <button className="btn btn-primary" onClick={showRepos}>
                Show Repos
              </button>
            </div>
          </div>
        </div>
        <Switch>
          <Route path={`${props.match.path}/repos`} component={Repos} />
          {/* <Route
            path={`${props.location.pathname}`}
            render={(props) => <Repos {...props} name={userName} />}
          /> */}
        </Switch>
      </div>
    </>
  );
};

export default Profile;
