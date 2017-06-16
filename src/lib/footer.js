import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  base: {
    padding: '10px',
    borderTop: '1px solid rgba(0,0,0,0.2)'
  }
};

const Footer = ({ children, classFooter }) => (
  <div className={classFooter} style={styles.base} >
    { children }
  </div>
);

Footer.defaultProps = {
  classFooter: ''
};

Footer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired,
  classFooter: PropTypes.string
};

export default Footer;
