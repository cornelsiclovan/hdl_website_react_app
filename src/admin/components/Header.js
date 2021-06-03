import React from 'react';
import logo from '../../img/hdl-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <React.Fragment>
            <header className="header-store">
                <div className="header-store__logo-box--store">
                    <Link to="/"><img src={logo} alt="hdl logo" className="header-store__logo--store"/></Link>
                </div>
            </header>
        </React.Fragment>
    )
};

export default Header; 