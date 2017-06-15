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

class Modal extends Component {

  componentWillUpdate(nextProps) {
    if (nextProps.isOpened) {
      document.addEventListener('mousedown', this.handleMouseClickOutSide);
    } else {
      document.addEventListener('mousedown', this.handleMouseClickOutSide);
    }
  }

  componentWillUnmount() {
    document.addEventListener('mousedown', this.handleMouseClickOutSide);
  }

  beforeClose = (DOMNode, removeFromDOM) => {
    console.log('callback from modal - beforeClose');
    const { beforeClose } = this.props;
    // run beforeClose prop before remove the modal
    beforeClose();
    // remove the modal
    removeFromDOM();
  }

  handleMouseClickOutSide = (e) => {
    if (isNodeInRoot(e.target, findDOMNode(this.content))) {
      return;
    }
    e.stopPropagation();
    this.props.onClose();
  }

  render() {
    const {
      closeOnEsc,
      isOpened,
      onOpen,
      onClose,
      onUpdate
    } = this.props;

    return (
      <Portal
        isOpened={isOpened}
        closeOnEsc={closeOnEsc}
        onOpen={onOpen}
        beforeClose={this.beforeClose}
        onClose={onClose}
        onUpdate={onUpdate}
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
  closeOnOutsideClick: undefined,
  onOpen: undefined,
  beforeClose: undefined,
  onClose: undefined,
  onUpdate: undefined
};

// Validate PropTypes
Modal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeOnEsc: PropTypes.bool,
  onOpen: PropTypes.func,
  beforeClose: PropTypes.func,
  onClose: PropTypes.func,
  onUpdate: PropTypes.func,
  // Array if its a bunch ofs components/html or element if its just one component/html
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired
};

Modal.Header = Header;
Modal.Footer = Footer;
Modal.Body = Body;

export default Modal;
