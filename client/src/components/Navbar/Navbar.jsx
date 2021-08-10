import React, {useState} from 'react';
import './Navbar.less'
import {NavLink} from 'react-router-dom'
import Logo from '../../assets/img/logo.svg'
import {useDispatch, useSelector} from "react-redux";
import {setLogout} from "../../reducers/userReducer";
import {getFiles, searchFiles} from "../../actions/file";
import {hideLoader, showLoader} from "../../reducers/appReducer";

const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth);
    const currentDir = useSelector(state => state.files.currentDir);
    const dispatch = useDispatch();
    const [searchName, setSearchName] = useState('');
    const [searchTimeout, setSearchTimeout] = useState(false);

    function searchHandler(e){
        setSearchName(e.target.value)
        if(searchTimeout != false){
            clearTimeout(searchTimeout)
        }
        dispatch(showLoader())
        if(e.target.value != '') {
            setSearchTimeout(setTimeout((value) => {
                dispatch(searchFiles(value))
            }, 500, e.target.value))
        } else {
            dispatch(getFiles(currentDir))
        }
    }

    return (
        <div className="navbar">
            <div className="container">
                <img src={Logo} alt="" className="navbar__logo"/>
                <div className="navbar__header">MERN CLOUD</div>
                <div className="navbar__links">
                    {isAuth && <input
                        value={searchName}
                        onChange={(e) => searchHandler(e)}
                        className="navbar__search"
                        type="text"
                        placeholder="Filename..."/>}
                    {!isAuth && <div className="navbar__login"><NavLink to="/login">Войти</NavLink></div>}
                    {!isAuth && <div className="navbar__registration"><NavLink to="/registration">Регистрация</NavLink></div>}
                    {isAuth && <div className="navbar__registration" onClick={() => dispatch(setLogout())}>Выйти</div>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;