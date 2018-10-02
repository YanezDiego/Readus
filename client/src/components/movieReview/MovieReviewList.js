import React, { Component } from 'react';
import MovieReview from './MovieReview'

class MovieReviewList extends Component {

  renderMovies = () => {
    return this.props.movieReview.map((movie, idx) =>
    <MovieReview key={idx} movie={movie}/>)
  };

  render(){
    return(
      <div>
        <h2>Recent Movie Reviews</h2>
        {this.renderMovies()}
      </div>
    );
  }

};




export default MovieReviewList;
