import React from 'react';
import PropTypes from 'prop-types';
// import './InpuCheckBoxField.css';

const InpuCheckBoxField = ({handleChange}) => (
  <div className="InpuCheckBoxField">
    <input type="checkbox" name="music" 
    checked= {true}
    onChange={handleChange}/>
    <input type="checkbox" name="danse"
    onChange={handleChange} />
    <input type="checkbox" name="cusine" 
    onChange={handleChange}/>
    <input type="checkbox" name="formation" 
    onChange={handleChange}/>
  </div>
);

InpuCheckBoxField.propTypes = {};

InpuCheckBoxField.defaultProps = {};

export default InpuCheckBoxField;
