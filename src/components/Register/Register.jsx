import React from 'react';
import AuthForm from '../AuthForm/AuthForm';

function Register() {

  return (
    <AuthForm
      name='register'
      title='Добро пожаловать!'
      buttonText='Зарегистрироваться'
      subtitle='Уже зарегистрированы?'
      link='/signin'
      linkText='Войти'
    >
      <label
        className='authform__title-input'
        htmlFor='register-name-input'
      >
        Имя
      </label>
      <input
        type='text'
        className='authform__input'
        id='register-name-input'
        name='name'
        placeholder='Введите имя'
        minLength='2'
        maxLength='30'
        required
        defaultValue='Богдан'
      />
      <span
        className='authform__input-error'
        id='register-name-input-error'
      />
      <label
        className='authform__title-input'
        htmlFor='register-email-input'
      >
        E-mail
      </label>
      <input
        type='email'
        className='authform__input'
        id='register-email-input'
        name='email'
        placeholder='Введите адрес электронной почты'
        required
        defaultValue='pochta@yandex.ru'

      />
      <span
        className='authform__input-error'
        id='register-email-input-error'
      />
      <label
        className='authform__title-input'
        htmlFor='register-password-input'
      >
        Пароль
      </label>
      <input
        type='password'
        className='authform__input authform__input_invalid'
        id='register-password-input'
        name='password'
        placeholder='Введите пароль'
        required
        defaultValue='1234568721'
      />
      <span
        className='authform__input-error authform__input-error_active'
        id='register-password-input-error'
      >
        Что-то пошло не так...
      </span>
    </AuthForm>
  );
}

export default Register;
