import { Component } from 'react';
import { StyledImageGalleryItem, StyledGalleryImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
export class ImageGalleryItem extends Component {
  
  static propTypes = {
    image: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  render() {
    const { image, tags, onClick, index } = this.props;
    return (
      <StyledImageGalleryItem onClick={onClick}>
        <StyledGalleryImage
          onClick={() => {
            this.props.getIndex(index);
          }}
          src={image}
          alt={tags}
        />
      </StyledImageGalleryItem>
    );
  }
}
