import React, { Component } from 'react';
import './Home.css';
import * as apiCalls from '../../util';
import Movie from '../../Components/Movie/Movie';

const Home = ({ movies, removeSpaces, matchMovie }) => {

    const allMovies = movies.map(movie => {
            return <Movie film={movie} key={movie.id} removeSpaces={removeSpaces} matchMovie={matchMovie}/>
        })

    return (
        <div className="movieShelf">
            <main>{allMovies}</main>
        </div>
    )
}

export default Home;