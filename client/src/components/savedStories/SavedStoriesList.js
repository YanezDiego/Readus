import React, { Component } from 'react'



import SavedStories from './SavedStories'



class SavedStoriesList extends Component {


  renderSavedStories = () => {
    return this.props.savedStories.map(storie => <SavedStories key={storie.id} storie={storie} />)
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




export default SavedStoriesList;
