import React, { Component } from "react";
import PropTypes from "prop-types";
class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };
  handleClose = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    return (
      <div className="Overlay" onClick={this.handleClose}>
        <div className="Modal">{this.props.children}</div>
      </div>
    );
  }
}
export default Modal;
