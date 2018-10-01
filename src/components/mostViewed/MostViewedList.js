import React, {Component} from 'react';
import MostViewed from './MostViewed'


export default class MostViewedList extends Component{

  renderMostViewed = () => {
    return this.props.mostViewed.map(article =>
        <MostViewed key={article.asset_id} article={article} />
    )
  };

  render(){
        return(
          <div>
            <h1>Most Viewed Articles in the last 30 days!</h1>
            {this.renderMostViewed()}
          </div>
        )
  }
};
