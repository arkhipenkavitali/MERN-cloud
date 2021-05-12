import React from 'react';
import './Navbar.less'
import {NavLink} from 'react-router-dom'
import Logo from '../../assets/img/logo.svg'
import {useDispatch, useSelector} from "react-redux";
import {setLogout} from "../../reducers/userReducer";

const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch();
    return (
        <div className="navbar">
            <div className="container">
                <img src={Logo} alt="" className="navbar__logo"/>
                <div className="navbar__header">MERN CLOUD</div>
                <div className="navbar__links">
                    {!isAuth && <div className="navbar__login"><NavLink to="/login">Войти</NavLink></div>}
                    {!isAuth && <div className="navbar__registration"><NavLink to="/registration">Регистрация</NavLink></div>}
                    {isAuth && <div className="navbar__registration" onClick={() => dispatch(setLogout())}>Выйти</div>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;