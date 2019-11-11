import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Detail from './pages/Detail';

export default function Routing() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/detail/:videoid">
                    <Detail />
                </Route>
            </Switch>
        </Router>
    );
}
