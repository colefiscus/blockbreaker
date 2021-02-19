import React from 'react';
import './MovieDetails.css';
import { Link } from 'react-router-dom';

const MovieDetails = ({ currentMovie }) => {

  if (!currentMovie) {
    return (
      <h1 className="loading">Loading...</h1>
    )
  } else {
    console.log(currentMovie)
    return (
      <section className="movieDetails">
        <div className="movieTitle">
          <h1>{currentMovie.movie.title}</h1>
          <h2>{currentMovie.movie.tagline}</h2>
        </div>
        <div className="movieOverview">
          <article className="movieSpecifics">
            <p><b>Overview:</b><br/>{currentMovie.movie.overview}</p>
            <p><b>Release Date: </b>{currentMovie.movie.release_date}</p>
            <p><b>Genre(s):</b> {currentMovie.movie.genres}</p>
            <p><b>Stars:</b> {currentMovie.movie.average_rating.toFixed(1)} / 10</p>
            <p><b>Runtime:</b> {currentMovie.movie.runtime} minutes</p>
            <p><b>Budget:</b> ${currentMovie.movie.budget}</p>
            <p><b>Revenue:</b> ${currentMovie.movie.revenue}</p>
          </article>  
          <img src={currentMovie.movie.poster_path}/>
        </div>
      </section>
    )
  }
}

export default MovieDetails;