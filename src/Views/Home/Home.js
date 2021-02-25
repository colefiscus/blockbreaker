import React, { Component } from 'react';
import './Home.css';
import * as apiCalls from '../../util';
import Movie from '../../Components/Movie/Movie';
import MovieChoice from '../../Components/MovieChoice/MovieChoice';
import TriviaQuestion from '../../Components/TriviaQuestion/TriviaQuestion';

const Home = ({ movies, removeSpaces, matchMovie, trivia }) => {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    const getRandomNumber = () => {
        return Math.floor(Math.random() * movies.length);
    }
    
    const randomMovies = [];
    const randomMovieIDs = [];

    for(let i = 0; i < 5; i++) {
        let movie = movies[getRandomNumber()];
        if (movie.title !== "Maratón After" && !randomMovieIDs.includes(movie.id)) {
            randomMovieIDs.push(movie.id)
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

    scrollToTop();  
    
    return (
        <div className="movieShelf">
            <div className="moviesAside">
                
                <aside>
                    <TriviaQuestion trivia={trivia} />
                    <h1><u>Trending Now</u></h1>
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