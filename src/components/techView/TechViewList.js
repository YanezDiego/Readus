import React, { Component }from 'react';



class TechViewList extends Component {

  const renderTechStories = (){
    return this.props.techStories.map((tech, idx) => <TechView key={idx} tech={tech}/>)
  };


  render(){
    return(
      <div>
        <h1>Tech Stories</h1>
        {this.renderTechStories}
      </div>
    )
  }

};
