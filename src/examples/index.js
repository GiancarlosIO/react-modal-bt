import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../../styles.css';
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
    console.log('modal component', Modal);
    return (
      <div className="container">
        <h1> Simple React-modal-bt </h1>
        <button onClick={this.showModal}>
          Open Modal
        </button>
        <Modal isOpened={isOpened} onClose={this.closeModal}>
          <Modal.Header>
            <h2>Header</h2>
          </Modal.Header>
          <Modal.Body>
            <h2>Body</h2>
          </Modal.Body>
          <Modal.Footer>
            <h2>Footer</h2>
            <button onClick={this.closeModal}>Close modal</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#container'));
