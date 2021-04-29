import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

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
                            <li class="navigation__item navigation__item--store">
                                <Link to="#section-book"><a href="#" class="navigation__link">Login</a></Link>
                            </li>
                            <li class="navigation__item navigation__item--store">
                                <a href="#" class="navigation__link">Signup</a>
                            </li>
                        </ul>
                    </nav>
                </div>

        </React.Fragment>
        ); 
}

export default Navigation;