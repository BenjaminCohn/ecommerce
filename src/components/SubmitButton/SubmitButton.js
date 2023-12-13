import React from 'react';
import PropTypes from 'prop-types';
import './SubmitButton.css';

const SubmitButton = ({children}) => (
  <div className="form-row flex">
    <button className="submit flex-1">{children}</button>
  </div>
);

SubmitButton.propTypes = {};

SubmitButton.defaultProps = {};

export default SubmitButton;
