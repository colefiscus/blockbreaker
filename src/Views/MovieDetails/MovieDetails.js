import React, { Component } from 'react';
import './MovieDetails.css';
import getData from '../../util';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMovie: ''
    }
  }

  componentDidMount = () => {
    getData(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
        .then(movie => this.setState( { currentMovie: movie }))
  }

  scrollToTop = () => {
    window.scrollTo(0,0 );
  }

  splitGenres = () => {
    return this.state.currentMovie.movie.genres.join(" /  ")
  }

  modifyDate = () => {
    return new Date(`${this.state.currentMovie.movie.release_date}T12:00:00-07:00`).toLocaleDateString()
  }

  modifyBudget = () => {
    return this.state.currentMovie.movie.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  modifyRevenue = () => {
    return this.state.currentMovie.movie.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
    
  render = () => {
    if (!this.state.currentMovie) {
      return (
        <Loading />
      )
    } else {
      return (
        <section className="movieDetails">
          <div className="movieTitle">
            <h1>{this.state.currentMovie.movie.title}</h1>
            <h2>{this.state.currentMovie.movie.tagline}</h2>
          </div>
          <div className="movieBoxes">
            <div className="movieOverview">
              <article className="movieSummary">
                <p><b>Genre(s):</b><br/>{this.splitGenres()}</p>
                <div className="hr">
                  <hr />
                </div>
                <p><b>Overview:</b><br/>{this.state.currentMovie.movie.overview}</p>
                <div className="hr">
                  <hr />
                </div>              
                <p><b>Stars:</b><br/>{this.state.currentMovie.movie.average_rating.toFixed(1)} / 10</p>
              </article>  
              <img src={this.state.currentMovie.movie.poster_path}/>
            </div>
            <article className="movieSpecifics">
              <p><b>Release Date: </b>{this.modifyDate()}</p>
              <p><b>Runtime:</b> {this.state.currentMovie.movie.runtime} minutes</p>
              <p><b>Budget:</b> ${this.modifyBudget()}</p>
              <p><b>Revenue:</b> ${this.modifyRevenue()}</p>
            </article>
          </div>
        </section>
      )
    }
  }
}

export default MovieDetails;