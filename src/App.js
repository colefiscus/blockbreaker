import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Login from './Views/Login/Login';
import Home from './Views/Home/Home';
import MovieDetails from './Views/MovieDetails/MovieDetails';

const App = () => {

  return (
    <>
      <Header />
      <Route exact path="/" component={Login} />
      <Route exact path="/home" render={() => 
        <Home /> } />
      <Route exact path="/movie/:id" render={({ match }) => {
        return <MovieDetails id={match.params.id} /> }} />
      <Footer />
    </>
  )
}

export default App;
