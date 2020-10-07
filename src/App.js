import React, { Component } from "react";
import imagesAPI from "./utils/imagesAPI";
import Spinner from "./components/loader";
import SearchBar from "./components/searchBar";
import ImageGallery from "./components/imageGallery";
import Error from "./components/error";
import LoadMoreButton from "./components/loadMoreButton";
import Modal from "./components/modal";
import "./styles.css";

class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 1,
    showModal: false,
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
  render() {
    const { error, loading, images, showModal } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleSearchSubmit} />
        {error && <Error message={`OOPS: ${error.message}`} />}
        {loading && <Spinner />}
        {images.length > 0 && <ImageGallery images={images} />}
        {images.length > 0 && !loading && (
          <LoadMoreButton handleClick={this.fetchImages} />
        )}
        <button type="button" onClick={this.toggleModal}>
          модалка
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img
              src="https://pixabay.com/get/55e2d1424d57b108f5d0846096293079103dd8e0564c704f752d7bd39e4bc751_1280.jpg"
              alt=""
            />
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )}
      </>
    );
  }
}

export default App;
