import React, { Component } from 'react';


const uri = `https://api.nytimes.com`;

class MovieReviewContainer extends Component {
  state = {
    movies: []
  };

  getMovies = () =>{
    fetch(`${uri}/svc/movies/v2/reviews/search.json?
      &api-key=f98593a095b44546bf4073744b540da0`)
      .then(resp => resp.json())
      .then(data => this.setState({movies: data.results}))
  };


  componentDidMount(){
    this.getMovies()
  };

  render(){
    return(
      <MovieReviewList movieReview={this.state.movies} />
    );
  }

};

export default MovieReviewContainer
