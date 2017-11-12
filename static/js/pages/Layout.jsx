import React from "react";

import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import Map from '../components/Map';

export default class Layout extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <Main />
                <Map />
                <Footer />
            </div>

        );
    }
}