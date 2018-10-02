import React, {Component} from 'react';
import MostViewedList from '../components/mostViewed/MostViewedList';

const uri = `https://api.nytimes.com`;




class MostViewedContainer extends Component {
  state = {
    mostViewed: []
  };

   fetchMostViewed = () => {
     // possible move to an env
     fetch(`${uri}/svc/mostpopular/v2/mostshared/technology/30.json?
    &api-key=f98593a095b44546bf4073744b540da0`)
    .then(resp => resp.json())
    .then(data => this.setState({mostViewed: data.results}))
  };

  componentDidMount(){
    this.fetchMostViewed()
  };

  render(){
    return(
      <div>
        <MostViewedList mostViewed={this.state.mostViewed}/>
      </div>
    );
  }
};



export default MostViewedContainer;
