import React from "react";

import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import Map from '../components/Map';
import Example from '../components/Example';



const Layout = () => (
    <div>
        <Header />
        <Map />
        <Example />
        <Footer />
    </div>
);

export default Layout;