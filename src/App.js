import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Login from './Views/Login/Login';
import Home from './Views/Home/Home';
import MovieDetails from './Views/MovieDetails/MovieDetails';
import getMovies from './util';


class App extends Component {
  constructor() {
    super()
    this.state = {
        movies: [],
        currentMovie: {},
        isLoading: true
    }
  }

  componentDidMount = () => {
    getMovies("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
        .then(movies => this.setState( {movies: movies}))
  }

  removeSpaces = movie => {
    return movie.split(' ').join('')
  }

  matchMovie = title => {
    const matchedMovie = this.state.movies.movies.find(movie => {
      return this.removeSpaces(movie.title) === this.removeSpaces(title)
    })
      getMovies(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${matchedMovie.id}`)
      .then(movie => this.setState( { currentMovie: movie, isLoading: false }))
  }

  render() {
    return (
      <>
        <Header />
        <Route exact path="/" component={Login} />
        <Route exact path="/home" render={() => <Home movies={this.state.movies.movies} matchMovie={this.matchMovie} removeSpaces={this.removeSpaces}/>} />
        <Route exact path="/movie/:title" 
          render={() => <MovieDetails currentMovie={this.state.currentMovie} isLoading={this.state.isLoading} /> }
          />
      </>
    )
  }
}

export default App;
