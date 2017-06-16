import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  base: {
    padding: '10px'
  }
};

const Body = ({ children, classBody }) => (
  <div className={classBody} style={styles.base} >
    { children }
  </div>
);

Body.defaultProps = {
  classBody: ''
};

Body.propTypes = {
  classBody: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired
};

export default Body;
