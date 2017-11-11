import React from "react";

import Footer from './Footer.jsx'
import Header from './Header.jsx';
import Map from './Map.jsx'
import TodoList from './TodoList.jsx';

export default class Layout extends React.Component {
    constructor() {
        super();
        this.name = "Hello";
    }

    render() {
        return(
            <div>
                <Header />
                <TodoList {...window.__initial_props} />
                <h1>{ this.name }</h1>
                <Map />
                <Footer />
            </div>

        );
    }
}