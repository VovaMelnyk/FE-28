import React, { useState, useEffect } from "react";
import { getUserRepos } from "../../helpers";
import { useParams } from "react-router-dom";
const Repos = (props) => {
  const [repos, setRepos] = useState([]);

  const userName = props.match.params.login;
  // const userName = useParams().login;
  // console.log(useParams());

  useEffect(() => {
    getUserRepos(userName).then((response) => setRepos(response.data));
  }, [userName]);

  return (
    <>
      {repos.map((repo) => (
        <div className="card mb-3" key={repo.id}>
          <div className="card-body">
            <h5>
              <a href={repo.html_url} rel="noopener noreferrer" target="_blank">
                {repo.name}
              </a>
            </h5>
          </div>
        </div>
      ))}
    </>
  );
};

export default Repos;
