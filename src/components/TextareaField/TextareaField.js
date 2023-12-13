import React from 'react';
import PropTypes from 'prop-types';
import './TextareaField.css';

const TextareaField = ({cols, rows}) => (
  <div className="TextareaField">
    <textarea cols={cols} rows={rows}></textarea>
  </div>
);

TextareaField.propTypes = {};

TextareaField.defaultProps = {};

export default TextareaField;
