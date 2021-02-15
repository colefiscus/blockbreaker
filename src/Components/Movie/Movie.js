import React from 'react';
import './Movie.css';
import { Link } from 'react-router-dom';

const Movie = ({ film }) => {
    console.log(film)
    return (
        <Link to={`/movie/${film.title}`}>
            <section>
                <p className="movieTitle">{film.title}</p>
                <p className="movieRating">{film.average_rating.toFixed(1)}</p>
            </section>
        </Link>
    )
}

export default Movie;