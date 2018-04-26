import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, IndexRedirect,browserHistory} from 'react-router';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import LandingApp from './components/LandingApp';
import Home from './pages/landing/Home';
import NewPerson from './pages/landing/NewPerson';

const store = configureStore();
render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={LandingApp}>
                <IndexRoute component={Home}/>
                <Route path="new-person" component={NewPerson}/>
            </Route>
        </Router>
    </Provider>, document.getElementById('app'));
