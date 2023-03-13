import { StyledImageGallery } from './ImageGallery.styled';
// import PropTypes from 'prop-types';

export const ImageGallery = ({ children }) => {
  return <StyledImageGallery>{children}</StyledImageGallery>;
};

// ImageGallery.propTypes = {
//   children: PropTypes.array.isRequired,
// };
