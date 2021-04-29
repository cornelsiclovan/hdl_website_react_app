import React from 'react';
import logo from '../../img/hdl-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <React.Fragment>
            <header class="header-store">
                <div class="header-store__logo-box--store">
                    <Link to="/"><img src={logo} alt="hdl logo" class="header-store__logo--store"/></Link>
                </div>
            </header>
        </React.Fragment>
    )
};

export default Header; 