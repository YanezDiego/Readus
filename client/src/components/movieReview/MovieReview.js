import React from 'react'


const MovieReview = (props) => {
  return(
    <div>
      <h2><a href={`${props.movie.link.url}`}>{props.movie.display_title}</a></h2>
      <p>{props.movie.headline}</p>
      <img src={`${props.movie.multimedia.src}`}/>
      <p>{props.movie.summary_short}</p>
      <p>Rated: {`${props.movie.mpaa_rating}`}</p>
      <p>{props.movie.byline}</p>
    </div>
  )
};


export default MovieReview;
