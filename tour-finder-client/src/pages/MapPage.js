import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Map from '../components/Map/Map';
import Search from '../components/Search/Search';
import BandList from '../components/BandList/BandList';

const MapPage = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
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
