import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './ErrorForm.css';

const ErrorForm = ({errorMessage}) => (
  <Fragment>
    <div className="error">{errorMessage}</div>
  </Fragment>
);

ErrorForm.propTypes = {};

ErrorForm.defaultProps = {};

export default ErrorForm;
