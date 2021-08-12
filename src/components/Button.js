import PropTypes from 'prop-types';

export default function Button(props) {
  const { buttonName } = props;
  return (
      <button type="button">
        {buttonName}
      </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};
