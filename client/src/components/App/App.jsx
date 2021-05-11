import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.less'
import Navbar from '../Navbar/Navbar';
import Registration from "../Registration/Registration";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Navbar />
                <Switch>
                    <Route path='/registration' component={Registration} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;