import PropTypes from 'prop-types';
import { BtnBox, LoadMore } from './Button.styled';

export const Button = ({ LoadMoreBtn }) => {
  return (
    <BtnBox>
      <LoadMore type="button" onClick={LoadMoreBtn}>
        Load more
      </LoadMore>
    </BtnBox>
  );
};

Button.propTypes = {
  LoadMoreBtn: PropTypes.func.isRequired,
};
