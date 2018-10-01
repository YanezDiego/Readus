import React from 'react';



const TechView = (props) => {
  return(
    <img src={`${props.tech.multimedia[0].url}`}
    <h2><a href={`${props.tech.url}`}>{props.tech.title}</a></h2>
    <p>{props.tech.abstract}<span>{props.tech.byline}</span></p>

  )
}
