import React from 'react';
import './Profile.css';
import { user } from '../../utils/constants';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <section className='profile'>
      <h2 className='profile__title'>{`Привет, ${user.name}!`}</h2>
      <form
        className='profile__form'
        noValidate
      >
        <div className='profile__form-container'>
          <label
            className='profile__form-input-name'
            htmlFor='profile-name-input'
          >
            Имя
          </label>
          <input
            className='profile__form-input'
            type='text'
            id='profile-name-input'
            name='name'
            placeholder='Введите имя'
            minLength='2'
            maxLength='30'
            required
            defaultValue={user.name}
          />
        </div>
        <span
          className='profile__form-input-error'
          id='profile-name-input-error'
        >
        </span>
        <div className='profile__form-container'>
          <label
            className='profile__form-input-name'
            htmlFor='profile-email-input'
          >
            E-mail
          </label>
          <input
            className='profile__form-input'
            type='email'
            id='profile-email-input'
            name='email'
            placeholder='Введите E-mail'
            required
            defaultValue={user.email}
          />
        </div>
        <span
          className='profile__form-input-error'
          id='profile-name-input-error' />
        <button
          className='profile__form-submit-button'
          type='submit'
        >
          Редактировать
        </button>
      </form>
      <Link
        className='profile__form-link'
        to='/signin'
      >
        Выйти из аккаунта
      </Link>
    </section>
  );
}

export default Profile;


