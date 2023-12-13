import React from 'react';
import PropTypes from 'prop-types';
import './InputField.css';

const InputField = (props) => {
  const {type, name, placeholder, handleChange} = props
  return(
    <div className="form-row flex gap-10">
        <input 
        type={type} className="flex-1"  
        name={name} 
        placeholder={placeholder} 
        onChange={handleChange}
        />
    </div>
  )};

InputField.propTypes = {};

InputField.defaultProps = {};

export default InputField;
