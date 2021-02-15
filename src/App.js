import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Login from './Views/Login/Login';
import Home from './Views/Home/Home';
import * as apiCalls from './util';


class App extends Component {
  constructor() {
    super()
    this.state = {
        movies: []
    }
  }

  componentDidMount = () => {
    apiCalls.getAllMovies("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
        .then(movies => this.setState( {movies: movies}))
  }

  render() {
    return (
      <>
        <Header />
        <Route exact path="/" component={Login} />
        <Route exact path="/home" render={() => <Home movies={this.state.movies.movies}/>} />
      </>
    )
  }
}

export default App;
