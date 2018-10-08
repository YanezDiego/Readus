import React from 'react'


const SavedStories = (props) => {
  return(
    <div>
      <h2>{props.storie.title}</h2>
      <p>{props.storie.byline}</p>
    </div>
  )
}

export default SavedStories
