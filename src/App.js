import React, { Component } from "react";
import imagesAPI from "./utils/imagesAPI";
import Spinner from "./components/loader";
import SearchBar from "./components/searchBar";
import ImageGallery from "./components/imageGallery";
import Error from "./components/error";
import LoadMoreButton from "./components/loadMoreButton";
import Modal from "./components/modal";
import "./styles.css";
import ImageGalleryItem from "./components/imageGalleryItem";

class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 1,
    showModal: false,
    modalContent: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevImages = prevState.images;
    const nextImages = this.state.images;
    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
    if (prevImages !== nextImages) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }
  fetchImages = () => {
    const { searchQuery, page } = this.state;
    this.setState({
      loading: true,
    });
    imagesAPI
      .fetchImagesWithQuery(searchQuery, page)
      .then((images) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };
  handleSearchSubmit = (query) => {
    this.setState({
      searchQuery: query,
      page: 1,
      images: [],
    });
  };
  toggleModal = () => {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  };
  handlerModalContent = (id) => {
    const content = this.state.images.find((image) => id === image.id);
    this.setState({ modalContent: content.largeImageURL });
  };
  render() {
    const { error, loading, images, showModal, modalContent } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleSearchSubmit} />
        {error && <Error message={`OOPS: ${error.message}`} />}
        {loading && <Spinner />}
        {images.length > 0 && (
          <ImageGallery onImageClick={this.toggleModal}>
            <ImageGalleryItem
              images={images}
              onCardClick={this.handlerModalContent}
            ></ImageGalleryItem>
          </ImageGallery>
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={modalContent} alt="modal" />
          </Modal>
        )}
        {images.length > 0 && !loading && (
          <LoadMoreButton handleClick={this.fetchImages} />
        )}
      </>
    );
  }
}

export default App;
