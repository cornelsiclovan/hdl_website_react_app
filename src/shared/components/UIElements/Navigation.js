import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';

const Navigation = () => {
    const auth = useContext(AuthContext);

    return (
        <React.Fragment>
            <div className="navigation">
                <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
                
                <label htmlFor="navi-toggle" className="navigation__button navigation__button--store">
                    <span className="navigation__icon navigation__icon--store">&nbsp;</span>
                </label>
                
                <div className="navigation__background navigation__background--store">&nbsp;</div>
                
                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__item navigation__item--store">
                            <Link className="navigation__link" to="/">Home</Link>
                        </li>
                        <li className="navigation__item navigation__item--store">
                            <Link className="navigation__link" to="/products">Products</Link>
                        </li>

                        {
                            !auth.isLoggedIn &&
                            <li className="navigation__item navigation__item--store">
                                <Link className="navigation__link" to="/auth">Login</Link>
                            </li>
                        }

                        {
                            !auth.isLoggedIn &&
                            <li className="navigation__item navigation__item--store">
                                <Link className="navigation__link" to="/auth">Signup</Link>
                            </li>
                        }

                        {
                            auth.isLoggedIn && 
                            <li className="navigation__item navigation__item--store">
                                <Link className="navigation__link" to="/shopping-cart">Shopping cart</Link>
                            </li>
                        }

                        {
                            auth.isLoggedIn &&
                                <li className="navigation__item navigation__item--store">
                                <Link className="navigation__link" to="/account">Account data</Link>
                            </li>
                        }

                        {
                            auth.isLoggedIn &&
                                <li className="navigation__item navigation__item--store">
                                <Link className="navigation__link" to="/" onClick={auth.logout}>Logout</Link>
                            </li>
                        }

                        {
                            auth.isLoggedIn && auth.isAdmin &&
                                <li className="navigation__item navigation__item--store">
                                <Link className="navigation__link" to="/admin">Admin</Link>
                            </li>
                        }
                    </ul>
                </nav>
            </div>
        </React.Fragment>
        ); 
}

export default Navigation;