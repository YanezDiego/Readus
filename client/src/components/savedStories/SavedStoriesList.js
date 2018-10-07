import React, { Component } from 'react'
import { connect }

class SavedStoriesList extends Component {

  renderSavedStories = () => {
    return this.props.savedStories.map(stories => <SavedStories key={stories.id} stories={stories}/>)
  };

  render(){
      return(
        <div>
          <h1>Saved for later</h1>
          {this.renderSavedStories()}
        </div>
      );
  }
};

const mapStateToProps = state => {
  return{
    savedStories: state.savedStories
  }
}

export default connect(mapStateToProps)(SavedStoriesList)
