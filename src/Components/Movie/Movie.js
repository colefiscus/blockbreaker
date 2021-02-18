import React from 'react';
import './Movie.css';
import { Link } from 'react-router-dom';

const Movie = ({ film, removeSpaces, matchMovie }) => {

    return (
        <Link to={`/movie/${removeSpaces(film.title)}`} onClick={() => matchMovie(film.title)} className="movieInfo">
            <section>
                <p className="movieLabel">{film.title}</p>
                <p className="movieRating">{film.average_rating.toFixed(1)}</p>
            </section>
        </Link>
    )
}

export default Movie;