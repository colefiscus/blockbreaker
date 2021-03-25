import React from 'react';
import './MovieList.css';
import Movie from '../Movie/Movie';

const MovieList = ({ movies, removeSpaces, matchMovie }) => {
  
  const allMovies = movies.map(movie => {
    return <Movie film={movie} key={movie.id} removeSpaces={removeSpaces} matchMovie={matchMovie} />
  })

  return (
    <main>
      {allMovies}
    </main>
  )
}

export default MovieList;