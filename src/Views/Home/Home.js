import React, { Component } from 'react';
import './Home.css';
import getData from '../../util';
import MovieList from '../../Components/MovieList/MovieList';
import TrendingNow from '../../Components/TrendingNow/TrendingNow';
import TriviaQuestion from '../../Components/TriviaQuestion/TriviaQuestion';
import { render } from '@testing-library/react';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            trivia: {}
        }
    }

    componentDidMount = () => {
        const allMovies = getData("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
          .then(movies => movies)
        const triviaQuestion = getData("https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=multiple")
          .then(question => question)
        Promise.all([allMovies, triviaQuestion])
          .then((data) => this.setState({ movies: data[0].movies, trivia: data[1].results[0] }))
    }

    scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    // getRandomNumber = () => {
    //     return Math.floor(Math.random() * this.state.movies.length);
    // }

    // filterMovieChoices = () => {
    //     const randomMovies = [];
    //     const randomMovieIDs = [];
    
    //     for(let i = 0; i < 5; i++) {
    //         let movie = this.state.movies[this.getRandomNumber()];
    //         if (movie.title !== "Maratón After" && !randomMovieIDs.includes(movie.id)) {
    //             randomMovieIDs.push(movie.id)
    //             randomMovies.push(movie);
    //         } else {
    //             i--
    //         }
    //     }
    // }
    
    render = () => {
        if (!this.state.movies.length || !this.state.trivia) {
            return (
              <h1 className="loading">Loading...</h1>
            )
        } else {
            return (
                <div className="movieShelf">
                    <div className="moviesAside"> 
                        <aside>
                            <TriviaQuestion trivia={this.state.trivia} />
                            <TrendingNow movies={this.state.movies} removeSpaces={this.props.removeSpaces} matchMovie={this.props.matchMovie} />
                        </aside>
                    </div>
                    <MovieList movies={this.state.movies} removeSpaces={this.props.removeSpaces} matchMovie={this.props.matchMovie} />
                </div>
            );
        }
    }
}

export default Home;