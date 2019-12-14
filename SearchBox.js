import React from "react";
const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba  bg-lightest-blue input"
        type="search"
        name="search"
        id="search"
        placeholder="search Robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
