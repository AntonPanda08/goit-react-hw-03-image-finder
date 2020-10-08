import React, { Component } from "react";
import PropTypes from "prop-types";

class ImageGalleryItem extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
    onCardClick: PropTypes.func.isRequired,
  };
  render() {
    return (
      <li className="ImageGalleryItem">
        <img
          onClick={() => this.props.onCardClick(this.props.largeImageUrl)}
          src={this.props.webformatURL}
          alt={this.props.tags}
          className="ImageGalleryItem-image"
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
