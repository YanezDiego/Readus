import React, { Component } from 'react';



class TechView  extends Component {


  addTechStoriesToApi = () => {
    console.log(this.props.tech)
    // fetch(`http://localhost:3001`,{
    //   method: 'POST'
    // })
  }

  render(){
    let media = this.props.tech.multimedia.map(media => media.url )
    
  return(

    <div key={this.props.tech.idx}>
      <h2><a href={`${this.props.tech.url}`}>{this.props.tech.title}</a></h2>
      <img src={`${media[3]}`}/>
      <p>{this.props.tech.abstract}</p>
      <p>{this.props.tech.byline}</p>
      <button onClick={this.addTechStoriesToApi}>Save to Read List</button>
    </div>
  )
  }
};

export default TechView;
