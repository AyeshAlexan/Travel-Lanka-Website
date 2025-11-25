import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <nav className="hero-nav">
      <a className="logo" href="/">Travel Lanka</a>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="social-icons">
        <a href="https://facebook.com" ><i className="fab fa-facebook-f"></i></a>
        <a href="https://instagram.com" ><i className="fab fa-instagram"></i></a>
        <a href="https://linkedin.com" ><i className="fab fa-linkedin-in"></i></a>
      </div>
    </nav>
  );
}

export default NavBar;
