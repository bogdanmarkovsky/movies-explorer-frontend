import React, { useContext, useEffect, useState } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import { Validator } from '../Validator/Validator';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function Profile({ onUpdate, onLogout }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  let validator = Validator(currentUser);

  function handleUpdateProfile(evt) {
    validator.handleChange(evt);
    if (evt.target.name === 'name') {
      setName(evt.target.value);
    } else {
      setEmail(evt.target.value);
    }
  }

  function handleUpdateSubmit(evt) {
    evt.preventDefault();
    onUpdate(name, email);
    validator.resetForm();
  }

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  return (
    <section className='profile'>
      <h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>
      <form
        className='profile__form'
        onSubmit={handleUpdateSubmit}
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
            value={name}
            onChange={handleUpdateProfile}
            className={`profile__form-input ${validator.errors.name && 'profile__form-input_invalid'}`}
            type='text'
            id='profile-name-input'
            name='name'
            placeholder='Введите имя'
            minLength='2'
            maxLength='30'
            required
          />
        </div>
        <span
          className='profile__form-input-error'
          id='profile-name-input-error'
        >
          {validator.errors.name}
        </span>
        <div className='profile__form-container'>
          <label
            className='profile__form-input-name'
            htmlFor='profile-email-input'
          >
            E-mail
          </label>
          <input
            value={email}
            onChange={handleUpdateProfile}
            className={`profile__form-input ${validator.errors.email && 'profile__form-input_invalid'}`}
            type='email'
            id='profile-email-input'
            name='email'
            placeholder='Введите E-mail'
            required
          />
        </div>
        <span
          className='profile__form-input-error'
          id='profile-name-input-error'>
          {validator.errors.email}
        </span>
        <button
          className='profile__form-submit-button'
          type='submit'
          disabled={!validator.isValid && true}
        >
          Редактировать
        </button>
      </form>
      <Link
        className='profile__form-link'
        onClick={onLogout}
        to='/'
      >
        Выйти из аккаунта
      </Link>
    </section>
  );
}

export default Profile;
