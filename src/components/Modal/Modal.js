import React, { Component, createRef } from 'react';

import s from './Modal.module.css';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.backdropRef = createRef();

    this.handleEscapeDown = this.handleEscapeDown.bind(this);
    this.handleBackdropClick = this.handleBackdropClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleEscapeDown);
    window.addEventListener('click', this.handleBackdropClick);
  }

  componentWillUpdate() {
    window.removeEventListener('keydown', this.handleEscapeDown);
    window.removeEventListener('click', this.handleBackdropClick);
  }

  handleEscapeDown = ({ code }) => {
    const { closeModal } = this.props;
    if (code !== 'Escape') return;

    closeModal();
  };

  handleBackdropClick = ({ target }) => {
    const { closeModal } = this.props;
    if (this.backdropRef.current !== target) return;

    closeModal();
  };

  render() {
    const { closeModal, children } = this.props;

    return (
      <div className={s.backdrop} ref={this.backdropRef}>
        <div className={s.modal}>
          <div>{children}</div>
          <button type="button" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
