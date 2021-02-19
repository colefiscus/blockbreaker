import React, { Component } from 'react';
import './Home.css';
import * as apiCalls from '../../util';
import Movie from '../../Components/Movie/Movie';

const Home = ({ movies, removeSpaces, matchMovie }) => {

    const allMovies = movies.map(movie => {
            return <Movie film={movie} key={movie.id} removeSpaces={removeSpaces} matchMovie={matchMovie}/>
        })

    const getRandomMovie = () => {
        const randomNum = Math.floor(Math.random() * movies.length)
        return randomNum
    }

    const movieChoices = [];

    for(let i = 0; i < 5; i++) {
        let movie = movies[getRandomMovie()]
        if (movie.title !== "Maquis") {
            movieChoices.push(movie)
        } else {
            i--
        }
    }

    console.log(movies)

    return (
        <div className="movieShelf">
            <aside>
                <h1>Popular:</h1>
            </aside>
            <main>
                {allMovies}
            </main>
        </div>
    )
}

export default Home;