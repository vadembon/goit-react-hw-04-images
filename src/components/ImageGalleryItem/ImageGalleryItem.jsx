import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

export const ImageGalleryItem = ({ image, onClickImg }) => {
  const handleImgClick = evt => {
    onClickImg(image.largeImageURL);
  };

  return (
    <li className="gallery-item">
      <img
        className="image"
        src={image.previewURL}
        alt={image.tags}
        onClick={handleImgClick}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onClickImg: PropTypes.func.isRequired,
};
