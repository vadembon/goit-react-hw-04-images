import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({ LoadMoreBtn }) => {
  return (
    <div className="btn-box">
      <button className="load-More-Btn" type="button" onClick={LoadMoreBtn}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  LoadMoreBtn: PropTypes.func.isRequired,
};
