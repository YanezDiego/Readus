import React from 'react';



const TechView = (props) => {
  let img = props.tech.multimedia.map(img => console.log(img['url'].split()))

  return(
    <div key={props.tech.idx}>
      <h2><a href={`${props.tech.url}`}>{props.tech.title}</a></h2>
      <p>{props.tech.abstract}</p>
      <p>{props.tech.byline}</p>
    </div>
  )
};

export default TechView;
