import { StyledImageGallery } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images }) => {
  console.log(images)
  return (
    <StyledImageGallery>
      {images.map(({ id, tags, largeImageURL, webformatURL }) => {
        return (
          <ImageGalleryItem key={id} tags={tags} largeImageURL={largeImageURL} webformatURL={webformatURL} />
        )
      }
      
      )}
    </StyledImageGallery>
  )
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({id: PropTypes.number.isRequired, tags: PropTypes.string.isRequired, largeImageURL: PropTypes.string.isRequired, webformatURL: PropTypes.string.isRequired})
  )
};
