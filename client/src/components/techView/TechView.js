import React, { Component } from 'react';
import { addTechStorieToApi } from '../../actions/savedStoriesAction'
import { connect } from 'react-redux'


class TechView  extends Component {


  addTechStoriesToApi = () => {
    const { title, abstract, byline, published_date, url} = this.props.tech
    const bodyObj = {
      title, abstract, byline, published_date, url
    }
    this.props.addTechStorieToApi(bodyObj)
  }

  render(){
    let media = this.props.tech.multimedia.map(media => media.url )

  return(

    <div key={this.props.tech.idx}>
      <h2><a href={`${this.props.tech.url}`}>{this.props.tech.title}</a></h2>
      <img src={`${media[3]}`}/>
      <p>{this.props.tech.abstract}</p>
      <p>{this.props.tech.byline}</p>
      <button onClick={this.addTechStoriesToApi}>Save to Read List</button>
    </div>
  )
  }
};

export default connect(null, {addTechStorieToApi})(TechView);
