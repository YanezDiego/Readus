import React, { Component } from 'react';


class MostViewed extends Component{

  render(){
    return(
      <div key={this.props.article.asset_id}>
        <h2><a target='_blank' href={`${this.props.article.url}`}>{this.props.article.title}</a></h2>
        <p>{this.props.article.abstract}</p><span>Total Shares: {this.props.article.total_shares}</span>
      </div>
    )
  }
}

export default MostViewed;
