import React from 'react';
import { Link } from 'react-router-dom';

const AccountMenu = () => {

    return (
        <React.Fragment>
            <div class="settings-main">
                <nav class="settings-main__nav">
                    <ul class="settings-main__list">
                        <li class="settings-main__item"> 
                           <Link to="/account" className="settings-main__link--selected">
                              
                
                                Personal settings

                            </Link>
                        </li>
                        <li className="settings-main__item">
                            <Link to="/order-history" class="settings-main__link">
                        
                                    Orders
                            </Link>
                        </li>
                        <li class="settings-main__item">
                            <Link to="/change-password" className="settings-main__link">
                               
                            
                                    Change password
                                
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>  

            <div className="continue-shopping"> 
                <Link class="btn-text" to="/products" style={{paddingTop:2+'rem'}}> 
                    &larr; &nbsp; continue shopping &nbsp;  
                </Link>
            </div>
        </React.Fragment>
    );
}

export default AccountMenu;