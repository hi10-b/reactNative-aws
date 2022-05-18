import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from '../Auth/Login'
import Purchase from '../components/purchase';
import Sales from '../components/sales';
import HomePage from '../HomePage'
import InvalidLogin from '../InvalidLogin'

function Main() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/homePage' exact component={HomePage} />
                <Route path='/invalidLogin' exact component={InvalidLogin} />
                <Route path='/sales' exact component={Sales} />
                <Route path='/purchase' exact component={Purchase} />

            </Switch>
        </Router>
    )
}

export default Main
