import React from "react";

const Search = ({ name, inputChange, onSubmit }) => {
  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Enter nickname"
        onKeyPress={onSubmit}
        value={name}
        onChange={inputChange}
      />
    </div>
  );
};

export default Search;
