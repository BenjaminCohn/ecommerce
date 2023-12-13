import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './PasswordField.css';

const PasswordField = ({name, placeholder, handleChange}) => {
  const inputRef = useRef(null)
  const setPasswordType = (event) =>{
    /*const input = event.target.previousSibling
    if(input.type === 'text'){
      input.type = "password"
    }else{
      input.type = "text"
    }*/
    ///console.log(inputRef.current);
    const input = inputRef.current

    if(input.type === 'text'){
      input.type = "password"
    }else{
      input.type = "text"
    }
    event.target.classList.toggle('fa-eye-slash')
  }
  return(
  <div className="form-row flex relative">
        <input 
        type="password" 
        autoComplete="on" 
        className="flex-1" 
        name={name} 
        ref={inputRef}
        placeholder={placeholder} 
        onChange = {handleChange}
        />
        <i 
        className="fas fa-eye fa-eye-slash absolute"
        onClick = {setPasswordType}
        >

        </i>
  </div>
)};

PasswordField.propTypes = {};

PasswordField.defaultProps = {};

export default PasswordField;
