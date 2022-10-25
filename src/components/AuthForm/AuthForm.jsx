import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './AuthForm.css';
import Logo from '../Logo/Logo';

function AuthForm({ name, title, buttonText, subtitle, link, linkText, children }) {
  const location = useLocation();

  return (
    <section className={`authform authform_type_${name}`}>
      <Logo place="authform" />
      <h2 className='authform__title'>{title}</h2>
      <form
        className={`authform__form authform__form_type_${name}`}
        noValidate
      >
        {children}
        <button
          type='submit'
          className={`authform__submit-button ${location.pathname === '/signin' && 'authform__submit-button_place_login'}`}
        >
          {buttonText}
        </button>
      </form>
      <p className='authform__subtitle'>{subtitle}
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
