import React, { useEffect } from 'react';
import './Movies.css';

function Movies({ handleGetLocalStorageMovies, handleGetSavedMovies, children }) {
  useEffect(() => {
    handleGetLocalStorageMovies();
    handleGetSavedMovies();
  }, []);

  return (
    <section className='movies'>
      {children}
    </section>
  );
}

export default Movies;
