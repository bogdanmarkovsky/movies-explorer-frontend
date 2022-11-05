import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import SearchForm from '../SearchForm/SearchForm';
import NotFound from '../NotFound/NotFound';
import Navigation from '../Navigation/Navigation';
import SideMenu from '../SideMenu/SideMenu';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SavedMovies from '../SavedMovies/SavedMovies';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { CurrentUserContext } from '../../context/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import { baseErrorMessage, successUpdateProfileMessage, conflictErrorMessage, credentialsErrorMessage } from '../../utils/messages';
import Popup from '../Popup/Popup';

function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [isSideMenuHidden, setIsSideMenuHidden] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupSuccess, setIsPopupSuccess] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [formError, setFormError] = useState('');
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const [notFoundMovies, setNotFoundMovies] = useState(false);
  const [isPreloaderActive, setIsPreloaderActive] = useState(false);
  const [moviesAmount, setMoviesAmount] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  function closePopup() {
    setIsPopupOpen(false);
  }

  function closeSideMenu() {
    setIsSideMenuHidden(true);
  }

  function handleCloseByOverlayClick(evt) {
    if (evt.target.classList.contains('sidemenu')) {
      closeSideMenu();
    }
    if (evt.target.classList.contains('popup')) {
      closePopup();
    }
  }

  function handleSideMenuButtonClick() {
    if (isSideMenuHidden) {
      setIsSideMenuHidden(false);
    } else {
      setIsSideMenuHidden(true);
    }
  }

  function handleStartMoviesAmount() {
    let width = window.innerWidth;

    if (width > 768) {
      setMoviesAmount(12);
    }

    if (width <= 768) {
      setMoviesAmount(8);
    }

    if (width <= 480) {
      setMoviesAmount(5);
    }
  }

  function handleMoviesAmount() {
    let width = window.innerWidth;

    if (width > 768) {
      setMoviesAmount(moviesAmount + 3);
    }

    if (width <= 768) {
      setMoviesAmount(moviesAmount + 2);
    }
  }

  const handleMoviesSearch = (value, isShort, movies) => {
    setNotFoundMovies(false);
    if (location.pathname === '/movies') {
      const text = localStorage.getItem('searchText');
      if (!text) {
        return setFoundMovies([]);
      }
    }
    let moviesList = movies.filter((item) =>
      item.nameRU.toLowerCase().includes(value.toLowerCase()));
    if (moviesList.length === 0) {
      return setNotFoundMovies(true);
    }
    if (isShort) {
      let shortMoviesList = moviesList.filter((item) =>
        item.duration <= 40);
      if (shortMoviesList.length === 0) {
        return setNotFoundMovies(true);
      }
      return setFoundMovies(shortMoviesList);
    }
    return setFoundMovies(moviesList);
  }

  function handleGetSavedMovies() {
    if (isLoggedIn) {
      mainApi
        .getMoviesFromSaved()
        .then((movies) => {
          setSavedMovies(movies);
        })
        .catch((err) => {
          console.log(err);
          setIsPopupSuccess(false);
          setPopupMessage(baseErrorMessage);
          setIsPopupOpen(true);
        })
    }
  }

  function handleGetMovies() {
    setIsPreloaderActive(true);
    moviesApi
      .getMoviesFromServer()
      .then((movies) => {
        setMovies(movies);
        localStorage.setItem('movies', JSON.stringify(movies));
      })
      .catch((err) => {
        console.log(err);
        setIsPopupSuccess(false);
        setPopupMessage(baseErrorMessage);
        setIsPopupOpen(true);
      })
      .finally(() => {
        setIsPreloaderActive(false);
      })
  }

  function handleGetLocalStorageMovies() {
    const movies = JSON.parse(localStorage.getItem('movies'));
    if (movies) {
      setMovies(movies);
    }
  }

  function handleAddMovieToSaved(movie) {
    mainApi
      .addMovieToSaved(movie)
      .then((newMovie) => {
        setSavedMovies([...savedMovies, newMovie]);
      })
      .catch((err) => {
        console.log(err);
        setIsPopupSuccess(false);
        setPopupMessage(baseErrorMessage);
        setIsPopupOpen(true);
      });
  }

  function handleDeleteMovieFromSaved(id) {
    mainApi
      .deleteMovieFromSaved(id)
      .then(() => {
        setSavedMovies(savedMovies.filter((item) =>
          item.movieId !== id));
      })
      .catch((err) => {
        console.log(err);
        setIsPopupSuccess(false);
        setPopupMessage(baseErrorMessage);
        setIsPopupOpen(true);
      });
  }

  function handleFindMovieInSaved(currentMovie) {
    return savedMovies.some((movie) =>
      movie.movieId === currentMovie.id);
  }

  function handleUpdateUserInfo(name, email) {
    mainApi
      .editUserInfo(name, email)
      .then((res) => {
        setCurrentUser(res);
        setIsPopupSuccess(true);
        setPopupMessage(successUpdateProfileMessage);
      })
      .catch((err) => {
        console.log(err);
        setIsPopupSuccess(false);
        if (err === 'Ошибка: 409') {
          return setPopupMessage(conflictErrorMessage);
        }
        setPopupMessage(baseErrorMessage);
      })
      .finally(() => {
        setIsPopupOpen(true);
      })
  }

  function handleRegister(name, email, password) {
    mainApi
      .register(name, password, email)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((err) => {
        if (err === 'Ошибка: 409') {
          return setFormError(conflictErrorMessage);
        }
        setFormError(baseErrorMessage);
      })
  }

  function handleLogin(email, password) {
    mainApi
      .login(email, password)
      .then((res) => {
        setCurrentUser(res);
        setIsLoggedIn(true);
        handleGetSavedMovies();
        navigate('/movies');
      })
      .catch((err) => {
        setFormError(credentialsErrorMessage);
        console.log(err);
      });
  }

  function handleCheckToken() {
    mainApi
      .getUserInfo()
      .then((res) => {
        setIsLoggedIn(true);
        setCurrentUser(res);
      })
      .catch(() => {
        setIsLoggedIn(false);
      });
  }

  function handleLogout() {
    mainApi
      .logout()
      .then(() => {
        setIsLoggedIn(false);
        navigate('/');
        localStorage.removeItem('movies');
        localStorage.removeItem('searchText');
        localStorage.removeItem('isShortMovies');
      })
      .catch((err) => {
        console.log(err);
        setIsPopupSuccess(false);
        setPopupMessage(baseErrorMessage);
        setIsPopupOpen(true);
      });
  }

  useEffect(() => {
    setIsSideMenuHidden(true);
    setFormError('');
  }, [location.pathname]);

  useEffect(() => {
    handleCheckToken();
  }, []);

  useEffect(() => {
    handleStartMoviesAmount();
  }, [foundMovies])

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Header>
          <Navigation
            isLoggedIn={isLoggedIn}
            onClick={handleSideMenuButtonClick}
          />
        </Header>
        <Routes>
          <Route
            path='/signup'
            element={isLoggedIn ?
              <Navigate to='/movies' /> :
              <Register
                onRegister={handleRegister}
                error={formError}
              />
            }
          />
          <Route
            path='/signin'
            element={isLoggedIn === true ?
              <Navigate to='/movies' /> :
              <Login
                onLogin={handleLogin}
                error={formError}
              />
            }
          />
          <Route
            path='/'
            element={<Main />}
            exact
          />
          <Route
            path='/movies'
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Movies handleGetLocalStorageMovies={handleGetLocalStorageMovies}>
                  <SearchForm
                    movies={movies}
                    handleGetMovies={handleGetMovies}
                    handleMoviesSearch={handleMoviesSearch}
                  />
                  <MoviesCardList
                    moviesAmount={moviesAmount}
                    handleMoviesAmount={handleMoviesAmount}
                    isPreloaderActive={isPreloaderActive}
                    foundMovies={foundMovies}
                    notFoundMovies={notFoundMovies}
                    handleFindMovieInSaved={handleFindMovieInSaved}
                    handleAddMovieToSaved={handleAddMovieToSaved}
                    handleDeleteMovieFromSaved={handleDeleteMovieFromSaved}
                  />
                </Movies>
              </ProtectedRoute>
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavedMovies handleGetSavedMovies={handleGetSavedMovies}>
                  <SearchForm
                    movies={savedMovies}
                    handleGetMovies={handleGetMovies}
                    handleMoviesSearch={handleMoviesSearch}
                  />
                  <MoviesCardList
                    moviesAmount={moviesAmount}
                    handleMoviesAmount={handleMoviesAmount}
                    isPreloaderActive={isPreloaderActive}
                    foundMovies={foundMovies}
                    notFoundMovies={notFoundMovies}
                    handleFindMovieInSaved={handleFindMovieInSaved}
                    handleAddMovieToSaved={handleAddMovieToSaved}
                    handleDeleteMovieFromSaved={handleDeleteMovieFromSaved}
                  />
                </SavedMovies>
              </ProtectedRoute>
            } />
          <Route
            path='/profile'
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Profile
                  onUpdate={handleUpdateUserInfo}
                  onLogout={handleLogout}
                />
              </ProtectedRoute>
            } />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
        <Footer />
        <SideMenu
          isHidden={isSideMenuHidden}
          onClose={handleSideMenuButtonClick}
          onClickOnOverlay={handleCloseByOverlayClick}
        />
        <Popup
          status={isPopupSuccess}
          popupMessage={popupMessage}
          isOpen={isPopupOpen}
          onClose={closePopup}
          onClickOnOverlay={handleCloseByOverlayClick} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
