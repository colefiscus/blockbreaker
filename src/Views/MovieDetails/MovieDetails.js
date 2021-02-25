import React from 'react';
import './MovieDetails.css';
import { Link } from 'react-router-dom';

const MovieDetails = ({ currentMovie }) => {

  const scrollToTop = () => {
    window.scrollTo(0,0 );
  }

    if (!currentMovie) {
    return (
      <h1 className="loading">Loading...</h1>
    )
  } else {

    scrollToTop()
    
    const genres = currentMovie.movie.genres.join(" /  ")
    const releaseDate = new Date(`${currentMovie.movie.release_date}T12:00:00-07:00`).toLocaleDateString()
    const budget = currentMovie.movie.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const revenue = currentMovie.movie.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return (
      <section className="movieDetails">
        <div className="movieTitle">
          <h1>{currentMovie.movie.title}</h1>
          <h2>{currentMovie.movie.tagline}</h2>
        </div>
        <div className="movieBoxes">
          <div className="movieOverview">
            <article className="movieSummary">
              <p><b>Genre(s):</b><br/>{genres}</p>
              <div className="hr">
                <hr />
              </div>
              <p><b>Overview:</b><br/>{currentMovie.movie.overview}</p>
              <div className="hr">
                <hr />
              </div>              
              <p><b>Stars:</b><br/>{currentMovie.movie.average_rating.toFixed(1)} / 10</p>
            </article>  
            <img src={currentMovie.movie.poster_path}/>
          </div>
          <article className="movieSpecifics">
            <p><b>Release Date: </b>{releaseDate}</p>
            <p><b>Runtime:</b> {currentMovie.movie.runtime} minutes</p>
            <p><b>Budget:</b> ${budget}</p>
            <p><b>Revenue:</b> ${revenue}</p>
          </article>
        </div>
      </section>
    )
  }
}

export default MovieDetails;