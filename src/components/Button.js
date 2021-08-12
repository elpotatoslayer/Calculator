import PropTypes from 'prop-types';

export default function Button(props) {
  const { buttonName } = props;
  return (
    <div>
      <button type="button">
        {buttonName}
      </button>
    </div>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};
