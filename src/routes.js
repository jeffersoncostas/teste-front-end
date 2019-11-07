import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

export const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/detail">
                    <Detail />
                </Route>
            </Switch>
        </Router>
    );
};
