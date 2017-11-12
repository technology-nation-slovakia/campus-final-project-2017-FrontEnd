import React from "react";
import { Switch, Route } from "react-router-dom";

import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';


export default class Main extends React.Component {

    render() {
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contact}/>
                </Switch>
            </main>
        );
    }
}