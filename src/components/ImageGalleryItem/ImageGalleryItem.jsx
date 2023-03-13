import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import {
  StyledImageGalleryItem,
  StyledGalleryImage,
} from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ tags, largeImageURL, webformatURL }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <StyledImageGalleryItem onClick={toggleModal}>
        <StyledGalleryImage src={webformatURL} alt={tags} />
      </StyledImageGalleryItem>
      {showModal && (
        <Modal
          largeImageURL={largeImageURL}
          tags={tags}
          onClose={toggleModal}
        />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func,
  onClose: PropTypes.func,
};
