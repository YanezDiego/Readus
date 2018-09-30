import React, {Component} from 'react';


export default class MostViewedList extends Component{

  renderMostViewed = () => {
    return this.props.mostViewed.map(article =>
      // Remeber: Move bellow to Most Viewed in refactor stage
      <div key={article.asset_id}>
        <h2><a target='_blank' href={`${article.url}`}>{article.title}</a></h2>
        <p>{article.abstract}</p><span>Total Shares: {article.total_shares}</span>
      </div>
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
