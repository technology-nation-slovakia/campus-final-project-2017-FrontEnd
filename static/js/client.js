import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import Layout from './pages/Layout';
import Example from './components/Example';

const app = document.getElementById('app')

render((
    <Router>
        <Layout />
    </Router>
),app);