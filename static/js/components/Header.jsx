import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';


export default class Header extends React.Component {
    render() {
        return(
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}