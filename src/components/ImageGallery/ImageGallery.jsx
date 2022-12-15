import './ImageGallery.css';

export const ImageGallery = ({ children }) => {
  return (
    <div className="gallery-box">
      <ul className="gallery">{children}</ul>
    </div>
  );
};
