import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ children }) => (
  <div className="modal__footer">
    { children }
  </div>
);

Footer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired
};

export default Footer;
