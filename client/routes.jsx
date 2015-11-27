import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import Navigation from './navigation.jsx'
import Home from './pages/home/main.jsx'
import About from './pages/about/main.jsx'
import NotFound from './pages/notfound/main.jsx'
//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

const routes = (
    <Router>
        <Route path="/" component={Navigation}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
);

render(routes, document.getElementById('app'));
