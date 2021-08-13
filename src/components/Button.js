import PropTypes from 'prop-types';
import './button.css';

export default function Button(props) {
  const { buttonName } = props;
  return (
    <button type="button" className="button">
      {buttonName}
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};
