import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../lib/modal.scss';
import Modal from '../lib/modal';

class App extends Component {

  state = {
    isOpened: false
  }

  showModal = () => {
    console.log('opening modal');
    this.setState({ isOpened: true });
  }

  closeModal = () => {
    console.log('before close the modal');
    this.setState({ isOpened: false }, () => {
      console.log('after close the modal');
    });
  }

  render() {
    const { isOpened } = this.state;

    return (
      <div className="container">
        <h1> Simple React-modal-bt </h1>
        <button onClick={this.showModal}>
          Open Modal
        </button>
        <Modal
          isOpened={isOpened}
          onClose={this.closeModal}
          closeOnEsc
        >
          <Modal.Header>
            <h2>HEADER MODAL</h2>
          </Modal.Header>
          <Modal.Body>
            <h2>Body modal</h2>
            <p>Its a paragraph</p>
          </Modal.Body>
          <Modal.Footer>
            <h2>Footer modal</h2>
            <h5>You can close the modal clicking outside or with ESC key</h5>
            <button onClick={this.closeModal}>
              CLOSE MODAL
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#container'));
