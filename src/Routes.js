//dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import App from './App.js';
import About from './components/About/about.js';
import Heroes from './components/Heroes/heroes.js';
import Home from './components/Home/home.js';
import Contador from './components/Contador/contador.js';

const AppRoutes = () =>

    <App>
        <Switch>
            <Route path="/about" component={About} />
            <Route path="/heroes" component={Heroes} />
            <Route path="/contador" component={Contador} />
            <Route path="/" component={Home} />
        </Switch>
    </App>;

export default AppRoutes;
