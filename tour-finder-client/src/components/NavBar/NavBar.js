import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Tour Finder</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav justify-content-end">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Add Your City</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Add Venue</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Add Band</a>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default NavBar;
