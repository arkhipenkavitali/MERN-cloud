import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import './App.less'
import Navbar from '../Navbar/Navbar';
import Registration from "../Authorization/Registration";
import Login from "../Authorization/Login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../../actions/user";
import Disk from "../Disk/Disk";

const App = () => {
    const isAuth = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(auth())
    }, []);

    return (
        <BrowserRouter>
            <div className="app">
                <Navbar />
                {!isAuth ?
                    <Switch>
                        <Route path='/registration' component={Registration} />
                        <Route path='/login' component={Login} />
                        <Redirect to='/login' />
                    </Switch>
                    :
                    <Switch>
                        <Route exact path='/' component={Disk} />
                        <Redirect to='/' />
                    </Switch>
                }

            </div>
        </BrowserRouter>
    );
};

export default App;