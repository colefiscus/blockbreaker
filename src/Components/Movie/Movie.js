import React from 'react';
import './Movie.css';
import { Link } from 'react-router-dom';

const Movie = ({ film }) => {

    return (
        <Link to={`/movie/${film.id}`} className="movieInfo">
            <section>
                <p className="movieLabel">{film.title}</p>
                <p className="movieRating">{film.average_rating.toFixed(1)}</p>
            </section>
        </Link>
    )
}

export default Movie;