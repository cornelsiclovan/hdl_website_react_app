import React from 'react';
import logo from '../../img/hdl-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <React.Fragment>
            <header class="header">
                <div class="header__logo-box">
                    <img src={logo} alt="hdl logo" class="header__logo"/>
                </div>   

                <div class="header__text-box">
                    <h1 class="heading-primary">
                        <span class="heading-primary--main">hdl partner portal</span>
                        <span class="heading-primary--sub">the fascinating world of automation</span>
                    </h1>

                    <Link to="/products"><a href="#" class="btn btn--white btn--animated">Discover our products</a> </Link>
                </div>
            </header>
        </React.Fragment>
    )
};

export default Header; 