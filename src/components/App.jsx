/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getImgGallery } from './serviceApi';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [imageGalleryBox, setImageGalleryBox] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setIsLoading(true);
    const imgGalleryBox = getImgGallery(searchQuery, page);
    setLoadMore(true);
    imgGalleryBox
      .then(res => {
        if (res.length === 0) {
          toast.warn('Sorry, but no such pictures were found!');
          setLoadMore(false);
          setImageGalleryBox([]);
        }
        if (res.length < 12) {
          setLoadMore(false);
        }
        setImageGalleryBox([...imageGalleryBox, ...res]);
      })
      .catch(error => {
        return toast.error('error');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchQuery, page]);

  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setPage(1);
    setImageGalleryBox([]);
  };

  const loadMoreImg = () => {
    setPage(page + 1);
  };

  const toggleModal = () => {
    setIsModalOpen(isModalOpen => !isModalOpen);
  };

  const imageClickHandler = url => {
    setModalImage(url);
    toggleModal();
  };

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery>
        {imageGalleryBox.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onClickImg={imageClickHandler}
          ></ImageGalleryItem>
        ))}
      </ImageGallery>
      {loadMore && <Button LoadMoreBtn={loadMoreImg} />}
      {isLoading && <Loader />}
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <img src={modalImage} alt={imageGalleryBox.tags} />
        </Modal>
      )}
      <ToastContainer position="top-right" theme="colored" autoClose={2000} />
    </div>
  );
};
