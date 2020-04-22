import React, { useContext, useState } from "react";
import { AlertContext } from "../../Context/Alert/alertContext";
import { GithubContext } from "../../Context/github/githubContext";

const Search = () => {
  const [value, setValue] = useState("");
  const { show, hide } = useContext(AlertContext);
  const github = useContext(GithubContext);

  const inputChange = ({ target }) => setValue(target.value);
  const onSubmit = (e) => {
    if (e.key !== "Enter") {
      return;
    }
    github.clearUsers();
    if (value.trim()) {
      github.search(value.trim());
      hide();
    } else {
      show("Empty input", "danger");
    }
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Enter nickname"
        onKeyPress={onSubmit}
        value={value}
        onChange={inputChange}
      />
    </div>
  );
};

export default Search;
