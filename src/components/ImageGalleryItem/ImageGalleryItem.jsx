import PropTypes from 'prop-types';
import { GalleryItem, Image } from './ImageGalleryItem.styled';
export const ImageGalleryItem = ({ image, onClickImg }) => {
  const handleImgClick = evt => {
    onClickImg(image.largeImageURL);
  };

  return (
    <GalleryItem className="gallery-item">
      <Image
        className="image"
        src={image.previewURL}
        alt={image.tags}
        onClick={handleImgClick}
      />
    </GalleryItem>
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
