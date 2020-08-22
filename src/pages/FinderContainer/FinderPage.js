import React, { Component } from 'react';
import MapPage from '../MapContainer/MapPage';
import Search from '../../components/Search/Search';
import BandList from '../../components/BandList/BandList';


class FinderPage extends Component {

  render(){
    return (
      <div>
        <div className="container">
          <div className="row top">
            <div className="col-sm">
              <MapPage />
            </div>
            <div className="col-sm">
              <Search />
            </div>
          </div>
        <BandList />
        </div>
      </div>
    );
  }
}

export default FinderPage;
