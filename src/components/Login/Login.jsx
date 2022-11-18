import React, { useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import { Validator } from '../Validator/Validator';

function Login({ onLogin, error }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let validator = Validator({ email: '', password: '' });

  function handleChangeLoginFields(evt) {
    validator.handleChange(evt);
    if (evt.target.name === 'email') {
      setEmail(evt.target.value)
    }
    if (evt.target.name === 'password') {
      setPassword(evt.target.value);
    }
  }

  function handleLoginButton(evt) {
    evt.preventDefault();
    onLogin(email, password);
    validator.resetForm();
  }

  return (
    <AuthForm
      formName='login'
      formTitle='Рады видеть!'
      buttonText='Войти'
      formSubtitle='Ещё не зарегистрированы?'
      link='/signup'
      linkText='Регистрация'
      onSubmit={handleLoginButton}
      errorText={error}
      validity={validator.isValid}
    >
      <label
        className='authform__title-input'
        htmlFor='login-email-input'
      >
        E-mail
      </label>
      <input
        value={email}
        onChange={handleChangeLoginFields}
        className={`authform__input ${validator.errors.email && 'authform__input_invalid'}`}
        type='email'
        id='login-email-input'
        name='email'
        placeholder='Введите email'
        required
      />
      <span
        className='authform__input-error'
        id='login-email-input-error'
      >
        {validator.errors.email}
      </span>
      <label
        className='authform__title-input'
        htmlFor='login-password-input'
      >
        Пароль
      </label>
      <input
        value={password}
        onChange={handleChangeLoginFields}
        className={`authform__input ${validator.errors.password && 'authform__input_invalid'}`}
        type='password'
        id='login-password-input'
        name='password'
        placeholder='Введите пароль'
        required
      />
      <span
        className='authform__input-error'
        id='login-password-input-error'
      >
        {validator.errors.password}
      </span>
    </AuthForm>
  );
}

export default Login;
