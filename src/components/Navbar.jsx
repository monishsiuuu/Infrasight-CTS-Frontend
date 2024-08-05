import React, { useEffect, useState } from 'react';
import { isLoggedIn, logout } from '../services/api.service';
import '../css/navbar.css';

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const refresh = () => {
    const res = isLoggedIn() == "true" ? true : false;
    setLoggedIn(() => res);
  }
  useEffect(() => {
    refresh();
  });
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> {/* Use navbar-dark and bg-dark for black background */}
      <a className="navbar-brand" href="#">
        INFRASIGHT
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/list">
              Servers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/addserver">
              Add
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/chart">
              Analysis
            </a>
          </li>
          <li className="nav-item">
            {
              !loggedIn ? (
                <a className="nav-link" href="/login">
                  Login
                </a>) : (<button onClick={() => {
                  logout();
                  refresh();
                }}>Logout</button>)
            }
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
