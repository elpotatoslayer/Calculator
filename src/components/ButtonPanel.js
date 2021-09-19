import PropTypes from 'prop-types';
import Button from './Button';
import './buttonpanel.css';

const ButtonPanel = ({ clickHandler }) => (
  <>
    <div id="btn-panel">
      <div className="row">
        <Button buttonName="AC" clickHandler={clickHandler} />
        <Button buttonName="+/-" clickHandler={clickHandler} />
        <Button buttonName="%" clickHandler={clickHandler} />
        <Button buttonName="÷" clickHandler={clickHandler} />
      </div>
      <div className="row">
        <Button buttonName="7" clickHandler={clickHandler} />
        <Button buttonName="8" clickHandler={clickHandler} />
        <Button buttonName="9" clickHandler={clickHandler} />
        <Button buttonName="x" clickHandler={clickHandler} />
      </div>
      <div className="row">
        <Button buttonName="4" clickHandler={clickHandler} />
        <Button buttonName="5" clickHandler={clickHandler} />
        <Button buttonName="6" clickHandler={clickHandler} />
        <Button buttonName="-" clickHandler={clickHandler} />
      </div>
      <div className="row">
        <Button buttonName="1" clickHandler={clickHandler} />
        <Button buttonName="2" clickHandler={clickHandler} />
        <Button buttonName="3" clickHandler={clickHandler} />
        <Button buttonName="+" clickHandler={clickHandler} />
      </div>
      <div className="row">
        <Button buttonName="0" clickHandler={clickHandler} />
        <Button buttonName="." clickHandler={clickHandler} />
        <Button buttonName="=" clickHandler={clickHandler} />
      </div>
    </div>
  </>
);

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
