import React from 'react';
import { useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import { Validator } from '../Validator/Validator';

function Register({ onRegister, error }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let validator = Validator({ name: '', email: '', password: '' });

  function handleChangeRegisterFields(evt) {
    validator.handleChange(evt);
    if (evt.target.name === 'name') {
      setName(evt.target.value)
    }
    if (evt.target.name === 'email') {
      setEmail(evt.target.value)
    }
    if (evt.target.name === 'password') {
      setPassword(evt.target.value);
    }
  }

  function handleRegisterButton(evt) {
    evt.preventDefault();
    onRegister(name, email, password);
    validator.resetForm();
  }

  return (
    <AuthForm
      formName='register'
      formTitle='Добро пожаловать!'
      buttonText='Зарегистрироваться'
      formSubtitle='Уже зарегистрированы?'
      link='/signin'
      linkText='Войти'
      onSubmit={handleRegisterButton}
      errorText={error}
      validity={validator.isValid}
    >
      <label
        className='authform__title-input'
        htmlFor='register-name-input'
      >
        Имя
      </label>
      <input
        value={name}
        onChange={handleChangeRegisterFields}
        className={`authform__input ${validator.errors.name && 'authform__input_invalid'}`}
        type='text'
        id='register-name-input'
        name='name'
        placeholder='Введите имя'
        minLength='2'
        maxLength='30'
        required
      />
      <span
        className='authform__input-error'
        id='register-name-input-error'
      >
        {validator.errors.name}
      </span>
      <label
        className='authform__title-input'
        htmlFor='register-email-input'
      >
        E-mail
      </label>
      <input
        value={email}
        onChange={handleChangeRegisterFields}
        className={`authform__input ${validator.errors.email && 'authform__input_invalid'}`}
        type='email'
        id='login-email-input'
        name='email'
        placeholder='Введите email'
        required
      />
      <span
        className='authform__input-error'
        id='register-email-input-error'
      >
        {validator.errors.email}
      </span>
      <label
        className='authform__title-input'
        htmlFor='register-password-input'
      >
        Пароль
      </label>
      <input
        value={password}
        onChange={handleChangeRegisterFields}
        className={`authform__input ${validator.errors.password && 'authform__input_invalid'}`}
        type='password'
        id='login-password-input'
        name='password'
        placeholder='Введите пароль'
        required
      />
      <span
        className='authform__input-error'
        id='register-password-input-error'
      >
        {validator.errors.password}
      </span>
    </AuthForm>
  );
}

export default Register;
