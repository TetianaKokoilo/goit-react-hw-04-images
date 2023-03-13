import { StyledButtonLoadMore } from './Button.styled';

export const Button = ({ clickBtn }) => (
  <StyledButtonLoadMore type="button" onClick={clickBtn}>
    Load More
  </StyledButtonLoadMore>
);
