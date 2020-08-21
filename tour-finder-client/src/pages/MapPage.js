import React from 'react';
import Map from '../components/Map/Map';
import Search from '../components/Search/Search';
import BandList from '../components/BandList/BandList';

import './MapPage.css';

const MapPage = () => {
  return (
    <div>
      <div className="container">
        <div className="row top">
          <div className="col-sm">
            <Map />
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

export default MapPage;
