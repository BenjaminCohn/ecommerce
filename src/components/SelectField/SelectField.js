import React from 'react';
import PropTypes from 'prop-types';
import './SelectField.css';

const SelectField = ({country, handleChange}) => (
  <div className="SelectField">
    <select name="country" onChange={handleChange} defaultValue={country[1]}>
      {
        country.map((elt, index) =>{
          
          return <option value={elt} key={index}>{elt}</option>
        })
      }
    </select>
  </div>
);

SelectField.propTypes = {};

SelectField.defaultProps = {};

export default SelectField;
