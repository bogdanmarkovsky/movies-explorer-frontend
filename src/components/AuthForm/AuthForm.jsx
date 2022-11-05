import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './AuthForm.css';
import Logo from '../Logo/Logo';

function AuthForm({
  formName,
  formTitle,
  buttonText,
  formSubtitle,
  link,
  linkText,
  onSubmit,
  errorText,
  validity,
  children
}) {
  const location = useLocation();

  return (
    <section className={`authform authform_type_${formName}`}>
      <Logo place="authform" />
      <h2 className='authform__title'>{formTitle}</h2>
      <form
        className={`authform__form authform__form_type_${formName}`}
        onSubmit={onSubmit}
        noValidate
      >
        {children}
        <span
          className={`authform__error-message ${location.pathname === '/signin' && 'authform__error-message_place_login'}`}
        >
          {errorText}
        </span>
        <button
          type='submit'
          className={`authform__submit-button ${location.pathname === '/signin' && 'authform__submit-button_place_login'}`}
          disabled={!validity && true}
        >
          {buttonText}
        </button>
      </form>
      <p className='authform__subtitle'>{formSubtitle}
        <Link
          to={link}
          className='authform__link'
        >{linkText}
        </Link>
      </p>
    </section>
  );
}

export default AuthForm;
