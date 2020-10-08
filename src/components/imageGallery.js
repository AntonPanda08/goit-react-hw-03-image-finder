import React, { Component } from "react";
import PropTypes from "prop-types";
class ImageGallerry extends Component {
  static propTypes = {
    onImageClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };
  handlerModal = (e) => {
    if (e.target !== e.currentTarget) {
      this.props.onImageClick();
    }
  };
  render() {
    return (
      <ul className="ImageGallery" onClick={this.handlerModal}>
        {this.props.children}
      </ul>
    );
  }
}

export default ImageGallerry;
