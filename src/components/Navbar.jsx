// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="scroll-watcher"></div>
      <div id='navbar' className="navbar">
        <div className="navbar-content">
          <div className="logo-container">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="nav-links">
            <div className="mr-5">
              <Link to="/">Home</Link>
            </div>
            <div className="mr-5">
              <Link to="/events">Events</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
