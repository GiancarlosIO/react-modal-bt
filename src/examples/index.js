import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../../styles.css';
import '../lib/modal.scss';
import Modal from '../../dist/lib/react-modal-bt';
// import Modal from '../lib/modal';

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
          <h2>Modal</h2>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#container'));
