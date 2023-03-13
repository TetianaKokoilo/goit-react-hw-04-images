import { StyledButtonLoadMore } from './Button.styled';

export const Button = ({ onLoadMore }) => (
  <StyledButtonLoadMore type="button" onClick={onLoadMore}>
    Load More
  </StyledButtonLoadMore>
);
