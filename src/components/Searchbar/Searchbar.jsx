import {
  StyledSearchbar,
  StyledSearchForm,
  StyledSearchFormButton,
  StyledSearchFormButtonLabel,
  StyledSearchFormInput,
} from './Searchbar.styled';
import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const Searchbar = ({ onSubmit }) => {
  const [searchImage, setSearchImage] = useState('');

  const handleChange = e => {
    const value = e.target.value.toLowerCase();
    setSearchImage(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchImage.trim() === '') {
      return Notify.info(
        'Please enter the name of the picture for the request'
      );
    }
    onSubmit(searchImage);
    setSearchImage('');
  };

  return (
    <StyledSearchbar onSubmit={handleSubmit}>
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
          onChange={handleChange}
        />
      </StyledSearchForm>
    </StyledSearchbar>
  );
};
