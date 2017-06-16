import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Portal from 'react-portal';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';
import Body from './body';

// helper function
// https://github.com/tajo/react-portal/issues/2#issuecomment-92058826
function isNodeInRoot(node, root) {
  let newNode = node;
  while (newNode) {
    if (newNode === root) {
      return true;
    }
    newNode = newNode.parentNode;
  }
  return false;
}

export default class Modal extends Component {

  componentDidMount() {
    document.addEventListener('mousedown', this.handleMouseClickOutSide);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.isOpened) {
      document.addEventListener('mousedown', this.handleMouseClickOutSide);
    } else {
      document.removeEventListener('mousedown', this.handleMouseClickOutSide);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleMouseClickOutSide);
  }

  onClose = () => {
    if (this.props.isOpened) this.props.onClose();
  }


  handleMouseClickOutSide = (e) => {
    if (isNodeInRoot(e.target, findDOMNode(this.content))) {
      return;
    }
    e.stopPropagation();
    console.log('clicked outside');
    this.onClose();
  }

  render() {
    const {
      closeOnEsc,
      isOpened,
    } = this.props;

    if (!isOpened) return null;

    return (
      <Portal
        isOpened={isOpened}
        closeOnEsc={closeOnEsc}
        onClose={this.onClose}
      >
        <div className="modal">
          <div className="modal__backdrop" />
          <div className="modal__wrapper" ref={(el) => { this.content = el; }} >
            { this.props.children }
          </div>
        </div>
      </Portal>
    );
  }
}

// set default props
Modal.defaultProps = {
  closeOnEsc: undefined,
  onClose: undefined,
};

// Validate PropTypes
Modal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeOnEsc: PropTypes.bool,
  onClose: PropTypes.func,
  // Array if its a bunch ofs components/html or element if its just one component/html
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired
};

Modal.Header = Header;
Modal.Footer = Footer;
Modal.Body = Body;
