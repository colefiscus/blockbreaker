import React, { Component } from 'react';
import './Home.css';
import getData from '../../util';
import MovieList from '../../Components/MovieList/MovieList';
import TrendingNow from '../../Components/TrendingNow/TrendingNow';
import TriviaQuestion from '../../Components/TriviaQuestion/TriviaQuestion';

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
                            <TrendingNow movies={this.state.movies} />
                        </aside>
                    </div>
                    <MovieList movies={this.state.movies} />
                </div>
            );
        }
    }
}

export default Home;