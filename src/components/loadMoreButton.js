import React from "react";
import PropTypes from "prop-types";
const LoadMoreButton = ({ handleClick }) => (
  <div className="container">
    <button className="Button" type="button" onClick={handleClick}>
      Load more
    </button>
  </div>
);

LoadMoreButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
export default LoadMoreButton;
