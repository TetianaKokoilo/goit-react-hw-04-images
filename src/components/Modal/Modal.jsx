/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
// import { createPortal } from 'react-dom';
import { StyledOverlay, StyledModal } from './Modal.styled';
// import PropTypes from 'prop-types';

// const modalRoot = document.querySelector('#modal-root');

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
// export class Modal extends Component {
//   componentDidMount() {
//     // console.log('Modal componentDidMount');
//     window.addEventListener('keydown', this.hadleKeyDown);
//   }

//   componentWillUnmount() {
//     // console.log('Modal componentWillUnmount');
//     window.removeEventListener('keydown', this.hadleKeyDown);
//   }

//   hadleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const children = this.props.children;
//     return createPortal(
//       <StyledOverlay onClick={this.handleBackdropClick}>
//             <StyledModal>{children}</StyledModal>
//       </StyledOverlay>,
//       modalRoot
//     );
//   }
// }

// Modal.propTypes = {
//   children: PropTypes.element.isRequired,
// }
