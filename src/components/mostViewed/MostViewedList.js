import React, {Component} from 'react';
import MostViewed from './MostViewed'


export default class MostViewedList extends Component{

  renderMostViewed = () => {
    return this.props.mostViewed.map(article =>
      // Rember: Move bellow to Most Viewed in refactor stage
      <MostViewed key={article.asset_id} article={article}/>
    )
  };

  render(){
        return(
          <div>
            <h1>Most Viewed Articles in the las 30 days!</h1>
            {this.renderMostViewed()}
          </div>
        )
  }
};
