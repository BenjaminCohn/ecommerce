import React from 'react';
import PropTypes from 'prop-types';
import './InputRadioField.css';

const InputRadioField = ({handleChange}) => (
  <div className="InputRadioField">
      Male : 
      <input type="radio" name="gender" value ="male" onChange={handleChange} checked={true} ></input>

      Female : 
      <input type="radio" name="gender" value ="female"onChange={handleChange} ></input>

      Other :
      <input type="radio" name="gender" value ="other" onChange={handleChange}></input>
  </div>
);

InputRadioField.propTypes = {};

InputRadioField.defaultProps = {};

export default InputRadioField;
