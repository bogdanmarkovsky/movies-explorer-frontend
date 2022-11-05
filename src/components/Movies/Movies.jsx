import React, { useEffect } from 'react';
import './Movies.css';

function Movies({ handleGetLocalStorageMovies, children }) {
  useEffect(() => {
    handleGetLocalStorageMovies();
  }, []);

  return (
    <section className='movies'>
      {children}
    </section>
  );
}

export default Movies;
