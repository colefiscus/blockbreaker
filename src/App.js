import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Login from './Views/Login/Login';
import Home from './Views/Home/Home';
import MovieDetails from './Views/MovieDetails/MovieDetails';
import getData from './util';


class App extends Component {
  constructor() {
    super()
    this.state = {
        currentMovie: '',
    }
  }

  removeSpaces = movie => {
    return movie.split(' ').join('')
  }

  matchMovie = title => {
    const matchedMovie = this.state.movies.find(movie => {
      return this.removeSpaces(movie.title) === this.removeSpaces(title)
    })
      getData(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${matchedMovie.id}`)
        .then(movie => this.setState( { currentMovie: movie }))
  }

  render() {
    return (
      <>
        <Header />
        <Route exact path="/" component={Login} />
        <Route exact path="/home" render={() => 
          <Home movies={this.state.movies} 
                matchMovie={this.matchMovie} 
                removeSpaces={this.removeSpaces} 
                trivia={this.state.trivia} /> } />
        <Route exact path="/movie/:title" render={() => 
          <MovieDetails currentMovie={this.state.currentMovie} /> } />
        <Footer />
      </>
    )
  }
}

export default App;
