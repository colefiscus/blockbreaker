import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Login from './Views/Login/Login';
import Home from './Views/Home/Home';
import MovieDetails from './Views/MovieDetails/MovieDetails';
import Error from './Views/Error/Error';

const App = () => {

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" render={() => 
          <Home /> } />
        <Route exact path="/movie/:id" render={({ match }) => {
          return <MovieDetails id={match.params.id} /> }} />
        <Error />
      </Switch>
      <Footer />
    </>
  )
}

export default App;
