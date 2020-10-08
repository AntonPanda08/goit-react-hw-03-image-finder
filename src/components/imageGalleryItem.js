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
    const { images } = this.props;
    return images.map(({ id, webformatURL, tags }) => (
      <li className="ImageGalleryItem" key={id}>
        <img
          onClick={() => this.props.onCardClick(id)}
          src={webformatURL}
          alt={tags}
          className="ImageGalleryItem-image"
        />
      </li>
    ));
  }
}

export default ImageGalleryItem;
