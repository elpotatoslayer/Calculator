import PropTypes from 'prop-types';
import './button.css';

export default function Button({ buttonName, clickHandler }) {
  return (
    <button
      type="button"
      className="button"
      onClick={() => clickHandler(buttonName)}
      onContextMenu={(e) => {
        e.preventDefault();
        clickHandler(buttonName);
      }}
    >
      {buttonName}
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
