
import { useEffect } from 'react';
import { StyledOverlay, StyledModal } from './Modal.styled';

export const Modal = ({largeImageURL, tags, onClose}) => {
  useEffect(() => {

    window.addEventListener('keydown', hadleKeyDown);
    return () => {
      window.removeEventListener('keydown', hadleKeyDown);
    };
  });
        const hadleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <StyledOverlay onClick={handleBackdropClick}>
      <StyledModal><img src={largeImageURL} alt={tags} /></StyledModal>
    </StyledOverlay>
  );
};
