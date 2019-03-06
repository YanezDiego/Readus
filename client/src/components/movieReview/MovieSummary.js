import React from 'react'


const MovieSummary = props => {
  return(
    <div>
      <p>{props.movie.summary_short}</p>
      <p>Rated: {props.movie.mpaa_rating}</p>
    </div>
  )
}


export default MovieSummary
