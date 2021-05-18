import React from 'react';
import { Link } from 'react-router-dom';

const AccountMenu = () => {

    return (
        <React.Fragment>
            <div class="settings-main">
                <nav class="settings-main__nav">
                    <ul class="settings-main__list">
                        <li class="settings-main__item"> 
                           <Link to="/account">
                                <a href="#" class="settings-main__link--selected">
                
                                Personal settings
                                </a>
                            </Link>
                        </li>
                        <li class="settings-main__item">
                            <Link to="/order-history">
                                <a href="#" class="settings-main__link">
                            
                                    Orders
                                </a>
                            </Link>
                        </li>
                        <li class="settings-main__item">
                            <Link to="/change-password">
                                <a href="#" class="settings-main__link">
                            
                                    Change password
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>  

            <div class="continue-shopping"> 
                <Link class="btn-text" to="/products">
                    <a class="btn-text" style={{paddingTop:2+'rem'}}> &larr; &nbsp; continue shopping &nbsp;  </a>
                </Link>
            </div>
        </React.Fragment>
    );
}

export default AccountMenu;