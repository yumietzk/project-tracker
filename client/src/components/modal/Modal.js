import React from 'react';
import ReactDOM from 'react-dom';
import Overlay from './Overlay';
import FormCreate from './FormCreate';

const Modal = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Overlay />, document.getElementById('overlay'))}
      {ReactDOM.createPortal(<FormCreate />, document.getElementById('modal'))}
    </React.Fragment>
  );
};

export default Modal;
