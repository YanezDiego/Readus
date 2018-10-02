import React, { Component } from 'react';


const uri = `https://api.nytimes.com`;

class MovieReviewContainer extends Component {
  state = {
    movies: []
  };

  getMovies = () =>{
    fetch(`${uri}/svc/movies/v2/reviews/search.json`)
  };
};
