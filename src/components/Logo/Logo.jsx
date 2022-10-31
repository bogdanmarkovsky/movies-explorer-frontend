import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Logo.css';

function Logo(props) {
  return (
    <Link
      className={`logo` + ((props.place === "authform") ? ' logo__authform' : '')}
      to="/"
    >
      <img
        src={logo}
        alt="лого приложения movies-explorer"
      />
    </Link>
  );
}

export default Logo;
