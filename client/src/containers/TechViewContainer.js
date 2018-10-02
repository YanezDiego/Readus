import React, { Component } from 'react';
import TechViewList from '../components/techView/TechViewList';

const uri = `https://api.nytimes.com`;


class TechViewContainer extends Component{
  state = {
    techStories: []
  };


  fetchTechStories = () => {
    fetch(`${uri}/svc/topstories/v2/technology.json?
      &api-key=f98593a095b44546bf4073744b540da0`)
    .then(resp => resp.json())
    .then(data => this.setState({techStories: data.results}))
  };

  componentDidMount(){
    this.fetchTechStories()
  };

  render(){
    return(
      <div>
      <TechViewList techStories={this.state.techStories}/>
      </div>
    );
  }

};

export default TechViewContainer;
