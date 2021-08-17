import PropTypes from 'prop-types';
import './button.css';

const Button = ({ buttonName, clickHandler }) => (
  <button
    type="button"
    className="button"
    onClick={() => clickHandler({ buttonName })}
    onContextMenu={(e) => {
      e.preventDefault();
      clickHandler(buttonName);
    }}
  >
    {buttonName}
  </button>
);

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
