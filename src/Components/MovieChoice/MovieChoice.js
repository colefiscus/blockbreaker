import React from 'react';
import './MovieChoice.css';
import { Link } from 'react-router-dom';

const MovieChoice = ({ film, removeSpaces, matchMovie }) => {
  return (
    <div className="movieChoice">
      <Link to={`/movie/${removeSpaces(film.title)}`} onClick={() => matchMovie(film.title)} className="movieChoiceTitleBox">
        <h2 className="movieChoiceTitle">{film.title}</h2>
      </Link>
      <img className="movieChoiceBackdrop" src={film.backdrop_path} />
    </div>
  )
}

export default MovieChoice