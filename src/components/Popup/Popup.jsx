import React from 'react';
import './Popup.css';
import successIcon from '../../images/success-icon.svg';
import errorIcon from '../../images/error-icon.svg';

function Popup({ status, popupMessage, isOpen, onClose, onClickOnOverlay }) {
  return (
    <div
      className={`popup ${isOpen ? 'popup_opened' : ''}`}
      onClick={onClickOnOverlay}
    >
      <div className='popup__container'>
        <button
          className='popup__close-button'
          type='button'
          onClick={onClose}
        />
        <img
          className='popup__icon'
          src={status ? successIcon : errorIcon}
          alt='Лого ответа'
        />
        <h2 className='popup__title'>{popupMessage}</h2>
      </div>
    </div>
  );
}

export default Popup;
