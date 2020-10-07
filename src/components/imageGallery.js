import React from "react";
import ImageGalleryItem from "./imageGalleryItem";
import Modal from "./modal";

const ImageGallerry = ({ images }) => (
  <ul className="ImageGallery">
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem key={id} webformatURL={webformatURL}>
        <Modal>
          <img src={largeImageURL} alt="" />
        </Modal>
      </ImageGalleryItem>
    ))}
  </ul>
);
export default ImageGallerry;
