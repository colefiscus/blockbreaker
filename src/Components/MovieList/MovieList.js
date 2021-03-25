import React from 'react';
import './MovieList.css';
import Movie from '../Movie/Movie';

const MovieList = ({ movies }) => {
  
  const allMovies = movies.map(movie => {
    return <Movie film={movie} key={movie.id} />
  })

  return (
    <main>
      {allMovies}
    </main>
  )
}

export default MovieList;