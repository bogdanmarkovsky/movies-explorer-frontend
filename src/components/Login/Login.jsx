import React from 'react';
import AuthForm from '../AuthForm/AuthForm';

function Login() {

  return (
    <AuthForm
      name='login'
      title='Рады видеть!'
      buttonText='Войти'
      subtitle='Ещё не зарегистрированы?'
      link='/signup'
      linkText='Регистрация'
    >
      <label
        className='authform__title-input'
        htmlFor='login-email-input'
      >
        E-mail
      </label>
      <input
        type='email'
        className='authform__input'
        id='login-email-input'
        name='email'
        placeholder='Введите имя'
        required
        defaultValue='pochta@yandex.ru'
      />
      <span
        className='authform__input-error'
        id='login-email-input-error'
      />
      <label
        className='authform__title-input'
        htmlFor='login-password-input'
      >
        Пароль
      </label>
      <input
        type='password'
        className='authform__input'
        id='login-password-input'
        name='password'
        placeholder='Введите пароль'
        required
      />
      <span
        className='authform__input-error'
        id='login-password-input-error'
      />
    </AuthForm>
  );
}

export default Login;
