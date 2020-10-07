import React from "react";
const LoadMoreButton = ({ handleClick }) => (
  <div className="container">
    <button className="Button" type="button" onClick={handleClick}>
      Load more
    </button>
  </div>
);

export default LoadMoreButton;
