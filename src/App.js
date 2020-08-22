import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import FinderPage from './pages/FinderContainer/FinderPage';
import AddBand from './forms/AddBand';
import AddCity from './forms/AddCity';
import AddVenue from './forms/AddVenue';

class App extends Component {



  render(){
    return (
      <div className="App">

      <NavBar />

        <Switch>
          <Route exact path='/' component={FinderPage} />
          <Route path='/addband' component={AddBand} />
          <Route path='/addcity' component={AddCity} />
          <Route path='/addvenue' component={AddVenue} />
          
        </Switch>

      <Footer />
      </div>
    );
  }
}

export default App;
