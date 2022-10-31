import React, { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
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
import MoviesCardList from '../MovieCardList/MoviesCardList';
import SavedMovies from '../SavedMovies/SavedMovies';
import Movies from '../Movies/Movies';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

function App() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isSideMenuHidden, setIsSideMenuHidden] = useState(true);

  function closeSideMenu() {
    setIsSideMenuHidden(true);
  }

  function handleCloseOnOverlay(evt) {
    if (evt.target.classList.contains('sidemenu')) {
      closeSideMenu();
    }
  }

  function handleSideMenuClick() {
    if (isSideMenuHidden) {
      setIsSideMenuHidden(false);
    } else {
      setIsSideMenuHidden(true);
    }
  }


  useEffect(() => {
    setIsSideMenuHidden(true);
  }, [location.pathname]);

  return (
    <div className="app">
      <Header>
        <Navigation
          isLoggedIn={isLoggedIn}
          handleSideMenuClick={handleSideMenuClick}
        />
      </Header>
      <Switch>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/movies">
          <Movies>
            <SearchForm />
            <MoviesCardList />
            <Preloader />
          </Movies>
        </Route>
        <Route path="/saved-movies">
          <SavedMovies>
            <SearchForm />
            <MoviesCardList />
            <Preloader />
          </SavedMovies>
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
      <SideMenu
        isSideMenuHidden={isSideMenuHidden}
        handleSideMenuClick={handleSideMenuClick}
        handleCloseOnOverlay={handleCloseOnOverlay}
      />
    </div>
  );
}

export default App;
