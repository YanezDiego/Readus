import React from 'react'
import MovieSummary from './MovieSummary'
import MovieImg from './MovieImg'

const MovieReview = (props) => {
  return(
    <div>
      <h2><a href={`${props.movie.link.url}`}>{props.movie.display_title}</a></h2>
      <p>{props.movie.headline}</p>
      {/* <MovieImg movie={props.movie}/> */}
      <img src={`${props.movie.multimedia.src}`}/>
      {/* <MovieSummary movie={props.movie}/> */}
      <p>{props.movie.summary_short}</p>
      <p>Rated: {`${props.movie.mpaa_rating}`}</p>
      <p>{props.movie.byline}</p>
    </div>
  )
};


export default MovieReview;
