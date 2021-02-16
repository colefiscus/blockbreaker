import React from 'react';
import './MovieDetails.css';
import { Link } from 'react-router-dom';

const MovieDetails = ({ currentMovie, isLoading }) => {

  console.log(isLoading)

  if (isLoading) {
    return (
      <h1>Loading...</h1>
    )
  } else {
    console.log(currentMovie)
    return (
      <h1>{currentMovie.movie.title}</h1>
    )
  }
}

export default MovieDetails;