import {
  StyledImageGalleryItem,
  StyledGalleryImage,
} from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ image, tags, onClick, index, getIndex }) => {
  return (
    <StyledImageGalleryItem onClick={onClick}>
      <StyledGalleryImage
        onClick={() => {
          getIndex(index);
        }}
        src={image}
        alt={tags}
      />
    </StyledImageGalleryItem>
  );
};


ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
