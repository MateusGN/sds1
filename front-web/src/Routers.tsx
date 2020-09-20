import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home';
import Record from './pages/Records';

const Routes = () => (
    <BrowserRouter>
    <Header />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/records">
                <Record />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;