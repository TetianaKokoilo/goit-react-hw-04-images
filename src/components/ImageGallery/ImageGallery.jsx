import React, { Component } from 'react';
import { StyledImageGallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {

  static propTypes = {
    children: PropTypes.array.isRequired,
  }

  render() {
    const children = this.props.children;
    return <StyledImageGallery>{children}</StyledImageGallery>;
  }
}
