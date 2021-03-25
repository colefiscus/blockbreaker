import React from 'react';
import './TrendingNow.css';
import MovieChoice from '../MovieChoice/MovieChoice';

const TrendingNow = ({ movies }) => {

  const getRandomNumber = () => {
    return Math.floor(Math.random() * movies.length);
  }

  const randomMovies = [];
  const randomMovieIDs = [];
    
  for(let i = 0; i < 5; i++) {
    let movie = movies[getRandomNumber()];
    if (movie.title !== "Maratón After" && !randomMovieIDs.includes(movie.id)) {
        randomMovieIDs.push(movie.id)
        randomMovies.push(movie);
    } else {
        i--
    }
  }

  const movieChoices = randomMovies.map(movie => {
    return <MovieChoice film={movie} key={movie.id} />
  })

  return (
    <>
      <h1><u>Trending Now</u></h1>
      {movieChoices}
    </>
  )
}

export default TrendingNow;