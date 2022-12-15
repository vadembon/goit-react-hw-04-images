import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getImgGallery } from './serviceApi';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    imageGalleryBox: [],
    loadMore: false,
    isLoading: false,
    isModalOpen: false,
    modalImage: '',
  };
  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });
      try {
        const imageGalleryBox = await getImgGallery(
          this.state.searchQuery,
          this.state.page
        );

        this.setState({ loadMore: true });
        if (imageGalleryBox.length === 0) {
          toast.warn('Sorry, but no such pictures were found!');
          this.setState({ loadMore: false, imageGalleryBox: [] });
        }

        if (imageGalleryBox.length < 12) {
          this.setState({ loadMore: false });
        }

        this.setState({
          imageGalleryBox: [...this.state.imageGalleryBox, ...imageGalleryBox],
        });
      } catch (error) {
        return toast.error('error');
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery: searchQuery, page: 1, imageGalleryBox: [] });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };

  imageClickHandler = url => {
    this.setState({ modalImage: url });
    this.toggleModal();
  };

  render() {
    const { imageGalleryBox, isLoading, loadMore, isModalOpen, modalImage } =
      this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery>
          {imageGalleryBox.map(image => (
            <ImageGalleryItem
              key={image.id}
              image={image}
              onClickImg={this.imageClickHandler}
            ></ImageGalleryItem>
          ))}
        </ImageGallery>
        {loadMore && <Button LoadMoreBtn={this.loadMore} />}
        {isLoading && <Loader />}
        {isModalOpen && (
          <Modal onClose={this.toggleModal}>
            <img src={modalImage} alt={imageGalleryBox.tags} />
          </Modal>
        )}
        <ToastContainer position="top-right" theme="colored" autoClose={2000} />
      </div>
    );
  }
}
