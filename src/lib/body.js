import React from 'react';
import PropTypes from 'prop-types';

const Body = ({ children }) => (
  <div className="modal__body">
    { children }
  </div>
);

Body.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired
};

export default Body;
