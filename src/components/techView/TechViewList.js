import React, { Component }from 'react';
import TechView from './TechView'



class TechViewList extends Component {

  renderTechStories = () => {
    return this.props.techStories.map((tech, idx) => <TechView key={idx} tech={tech}/>)
  };


  render(){
    return(
      <div>
        <h1>Tech Stories</h1>
        {this.renderTechStories()}
      </div>
    )
  }

};

export default TechViewList;
