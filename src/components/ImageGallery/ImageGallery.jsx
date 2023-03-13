import { StyledImageGallery } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
// import PropTypes from 'prop-types';

export const ImageGallery = ({ images }) => {
  console.log(images)
  return (
    <ul>
      {images.map(({ id, tags, largeImageURL, webformatURL }) => {
        return (
          <ImageGalleryItem key={id} tags={tags} largeImageURL={largeImageURL} webformatURL={webformatURL} />
        )
      }
      
      )}
    </ul>
  )
};

// ImageGallery.propTypes = {
//   children: PropTypes.array.isRequired,
// };
