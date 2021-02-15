import React, { Component } from 'react';
import './Home.css';
import * as apiCalls from '../../util';
import Movie from '../../Components/Movie/Movie';

const Home = ({ movies }) => {

    const allMovies = movies.map(movie => {
            return <Movie film={movie} key={movie.id}/>
        })

    return (
        <div className="movieShelf">
            <main>{allMovies}</main>
        </div>
    )
}

export default Home;