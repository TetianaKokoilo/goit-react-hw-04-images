import {
  StyledSearchbar,
  StyledSearchForm,
  StyledSearchFormButton,
  StyledSearchFormButtonLabel,
  StyledSearchFormInput,
} from './Searchbar.styled';
import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export class Searchbar extends Component {
  state = {
    searchImage: '',
  };

  handleChange = e => {
    const value = e.target.value.toLowerCase();
    this.setState({ searchImage: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchImage.trim() === '') {
      return Notify.info('Please enter the name of the picture for the request');
    }
    this.props.onSubmit(this.state.searchImage);
    this.setState({ searchImage: '' });
  };

  render() {
    const { searchImage } = this.state;
    return (
      <StyledSearchbar onSubmit={this.handleSubmit}>
        <StyledSearchForm>
          <StyledSearchFormButton type="submit">
            <StyledSearchFormButtonLabel>Search</StyledSearchFormButtonLabel>
          </StyledSearchFormButton>

          <StyledSearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchImage}
            onChange={this.handleChange}
          />
        </StyledSearchForm>
      </StyledSearchbar>
    );
  }
}
