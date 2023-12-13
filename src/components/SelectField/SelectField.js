import React from 'react';
import PropTypes from 'prop-types';
import './SelectField.css';

const SelectField = ({country, handleChange}) => (
  <div className="SelectField">
    <select name="country" onChange={handleChange}>
      {
        country.map((elt, index) =>{
          if(index === 1){
          return <option selected={true} value={elt} key={index}>{elt}</option>
          }
          return <option value={elt} key={index}>{elt}</option>
        })
      }
    </select>
  </div>
);

SelectField.propTypes = {};

SelectField.defaultProps = {};

export default SelectField;
