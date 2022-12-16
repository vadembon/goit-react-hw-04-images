import { GalleryBox, Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ children }) => {
  return (
    <GalleryBox className="gallery-box">
      <Gallery className="gallery">{children}</Gallery>
    </GalleryBox>
  );
};
