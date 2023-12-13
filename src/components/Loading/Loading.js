import React from 'react';
import PropTypes from 'prop-types';
import './Loading.css';

const Loading = () => (
  <div className="loading">
    <img src="images/loading-buffering.gif" />
  </div>
);

Loading.propTypes = {};

Loading.defaultProps = {};

export default Loading;
