import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Tour Finder</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav justify-content-end">
                <li className="nav-item active">
                <Link className="nav-link" to='/addcity'>Add Your City</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/addvenue'>Add Venue</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/addband'>Add Band</Link>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default NavBar;
