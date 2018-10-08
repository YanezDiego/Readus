import React, {Component} from 'react';
import MostViewedList from '../components/mostViewed/MostViewedList';

const uri = `https://api.nytimes.com`;




class MostViewedContainer extends Component {
  state = {
    mostViewed: []
  };

   fetchMostViewed = () => {
     fetch(`${process.env.REACT_APP_API_URL}/svc/mostpopular/v2/mostshared/technology/30.json?
    &api-key=${process.env.REACT_APP_API_KEY}`)
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
