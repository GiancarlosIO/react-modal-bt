import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  base: {
    padding: '10px',
    borderBottom: '1px solid rgba(0,0,0,0.2)'
  }
};

const Header = ({ children, classHeader }) => (
  <div className={classHeader} style={styles.base} >
    { children }
  </div>
);

Header.defaultProps = {
  classHeader: ''
};

Header.propTypes = {
  children: PropTypes.element.isRequired,
  classHeader: PropTypes.string
};

export default Header;
