import React from "react";
import { Link, Switch, Route, NavLink } from "react-router-dom";

import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';

const Header = () => (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li><NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink></li>
              <li><NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink></li>
              <li><NavLink to="/topics" className="nav-link" activeClassName="active">Topics</NavLink></li>
              <li><NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>

    </header>
)

export default Header