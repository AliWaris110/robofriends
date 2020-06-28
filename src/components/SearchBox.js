import React from "react";
const SearchBox = ({ searchChange }) => {
  console.log("SerchBox");
  return (
    <div className="pa3">
      <input
        className="pa3 ba br4 b--green bg-lightest-blue"
        type="search"
        placeholder="Search Robot.."
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
