import React from 'react';
import logo from '../../img/hdl-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <React.Fragment>
            <header className="header">
                <div className="header__logo-box">
                    <img src={logo} alt="hdl logo" className="header__logo"/>
                </div>   

                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">hdl partner portal</span>
                        <span className="heading-primary--sub">the fascinating world of automation</span>
                    </h1>

                    <Link to="/products" className="btn btn--white btn--animated">Discover our products</Link>
                </div>
            </header>
        </React.Fragment>
    )
};

export default Header; 