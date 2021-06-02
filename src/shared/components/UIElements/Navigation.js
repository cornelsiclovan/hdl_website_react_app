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
                            <Link to="/"><a href="" className="navigation__link">Home</a></Link>
                        </li>
                        <li className="navigation__item navigation__item--store">
                            <Link to="/products"><a href="" className="navigation__link">Products</a></Link>
                        </li>

                        {
                            !auth.isLoggedIn &&
                            <li className="navigation__item navigation__item--store">
                                <Link to="/auth"><a href="" className="navigation__link">Login</a></Link>
                            </li>
                        }

                        {
                            !auth.isLoggedIn &&
                            <li className="navigation__item navigation__item--store">
                                <Link to="/auth"><a href="" className="navigation__link">Signup</a></Link>
                            </li>
                        }

                        {
                            auth.isLoggedIn && 
                            <li className="navigation__item navigation__item--store">
                                <Link to="/shopping-cart"><a href="#" className="navigation__link">Shopping cart</a></Link>
                            </li>
                        }

                        {
                            auth.isLoggedIn &&
                                <li className="navigation__item navigation__item--store">
                                <Link to="/account"><a href="#" className="navigation__link">Account data</a></Link>
                            </li>
                        }

                        {
                            auth.isLoggedIn &&
                                <li className="navigation__item navigation__item--store">
                                <Link to="/"><a href="" className="navigation__link" onClick={auth.logout}>Logout</a></Link>
                            </li>
                        }
                    </ul>
                </nav>
            </div>
        </React.Fragment>
        ); 
}

export default Navigation;