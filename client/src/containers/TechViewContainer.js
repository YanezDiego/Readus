import React, { Component } from 'react';
import { connect } from 'react-redux';

import TechViewList from '../components/techView/TechViewList';
import SavedStoriesList from '../components/savedStories/SavedStoriesList'
import {fetchSavedStories} from '../actions/savedStoriesAction'


class TechViewContainer extends Component{
  state = {
    techStories: []
  };


  fetchTechStories = () => {
    fetch(`${process.env.REACT_APP_API_URL}/svc/topstories/v2/technology.json?
      &api-key=${process.env.REACT_APP_API_KEY}`)
    .then(resp => resp.json())
    .then(data => this.setState({techStories: data.results}))
  };

  componentDidMount(){
    this.fetchTechStories()

    this.props.fetchSavedStories()
  };

  render(){
    return(
      <div>
      <TechViewList className='techView' techStories={this.state.techStories}/>

      <SavedStoriesList
        className='savedStories'
        savedStories={this.props.savedStories}/>
      </div>
    );
  }

};



const mapDispatchToProps = dispatch => {
  return {fetchSavedStories: () => dispatch(fetchSavedStories())}
}

const mapStateToProps = state => {
  return{
    savedStories: state.savedStories
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TechViewContainer);
