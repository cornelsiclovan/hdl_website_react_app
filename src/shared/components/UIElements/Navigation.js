import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';

const Navigation = () => {
    const auth = useContext(AuthContext);

    return (
        <React.Fragment>
            <div class="navigation">
                <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
                
                <label for="navi-toggle" class="navigation__button navigation__button--store">
                    <span class="navigation__icon navigation__icon--store">&nbsp;</span>
                </label>
                
                <div class="navigation__background navigation__background--store">&nbsp;</div>
                
                <nav class="navigation__nav">
                    <ul class="navigation__list">
                        <li class="navigation__item navigation__item--store">
                            <Link to="/"><a href="" class="navigation__link">Home</a></Link>
                        </li>
                        <li class="navigation__item navigation__item--store">
                            <Link to="/products"><a href="" class="navigation__link">Products</a></Link>
                        </li>

                        {
                            !auth.isLoggedIn &&
                            <li class="navigation__item navigation__item--store">
                                <Link to="/auth"><a href="" class="navigation__link">Login</a></Link>
                            </li>
                        }

                        {
                            !auth.isLoggedIn &&
                            <li class="navigation__item navigation__item--store">
                                <Link to="/auth"><a href="" class="navigation__link">Signup</a></Link>
                            </li>
                        }

                        {
                            auth.isLoggedIn && 
                            <li class="navigation__item navigation__item--store">
                                <Link to="/shopping-cart"><a href="#" class="navigation__link">Shopping cart</a></Link>
                            </li>
                        }

                        {
                            auth.isLoggedIn &&
                                <li class="navigation__item navigation__item--store">
                                <Link to="/account"><a href="#" class="navigation__link">Account data</a></Link>
                            </li>
                        }

                        {
                            auth.isLoggedIn &&
                                <li class="navigation__item navigation__item--store">
                                <Link to="/"><a href="" class="navigation__link" onClick={auth.logout}>Logout</a></Link>
                            </li>
                        }
                    </ul>
                </nav>
            </div>
        </React.Fragment>
        ); 
}

export default Navigation;