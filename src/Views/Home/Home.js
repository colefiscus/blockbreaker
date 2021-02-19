import React, { Component } from 'react';
import './Home.css';
import * as apiCalls from '../../util';
import Movie from '../../Components/Movie/Movie';
import MovieChoice from '../../Components/MovieChoice/MovieChoice';

const Home = ({ movies, removeSpaces, matchMovie }) => {

    const getRandomNumber = () => {
        return Math.floor(Math.random() * movies.length);
    }
    
    const randomMovies = [];

    for(let i = 0; i < 5; i++) {
        let movie = movies[getRandomNumber()];
        if (movie.title !== "Maratón After") {
            randomMovies.push(movie);
        } else {
            i--
        }
    }
    
    const movieChoices = randomMovies.map(movie => {
        return <MovieChoice film={movie} key={movie.id} removeSpaces={removeSpaces} matchMovie={matchMovie} />
    })

    const allMovies = movies.map(movie => {
        return <Movie film={movie} key={movie.id} removeSpaces={removeSpaces} matchMovie={matchMovie} />
    })
    
    return (
        <div className="movieShelf">
            <div className="moviesAside">
                <h1><u>Trending Now</u></h1>
                <aside>
                    {movieChoices}
                </aside>
            </div>
            <main>
                {allMovies}
            </main>
        </div>
    )
}

export default Home;