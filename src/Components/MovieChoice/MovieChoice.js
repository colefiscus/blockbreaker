import React from 'react';
import './MovieChoice.css';
import { Link } from 'react-router-dom';

const MovieChoice = ({ film }) => {
  return (
    <div className="movieChoice">
      <Link to={`/movie/${film.id}`} className="movieChoiceTitleBox">
        <h2 className="movieChoiceTitle">{film.title}</h2>
      </Link>
      <img className="movieChoiceBackdrop" src={film.backdrop_path} />
    </div>
  )
}

export default MovieChoice