import React, { Component } from 'react';
import Map from '../../components/Map/Map';

import './MapPage.css';
import CityModel from '../../models/city';

class MapPage extends Component {
  state = {
    cities: [],
  };

  componentDidMount() {
    CityModel.getAllCities()
      .then((result) => {
        console.log(result);
        this.setState({cities: result});
      })
      .catch((err) => console.log(err))
  }

  render(){
    return (
      <div>
        <Map city={this.state.cities} />
      </div>
    );
  }
}

export default MapPage;
