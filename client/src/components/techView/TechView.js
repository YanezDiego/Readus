import React from 'react';



const TechView = (props) => {

  // let img = props.tech.multimedia.filter(img =>{return Object.values(img)})
  // let normImg = console.log(img.splice(2,1))
  // img renderign in process


  return(
    <div key={props.tech.idx}>
      <h2><a href={`${props.tech.url}`}>{props.tech.title}</a></h2>
      <p>{props.tech.abstract}</p>
      <p>{props.tech.byline}</p>
    </div>
  )
};

export default TechView;
