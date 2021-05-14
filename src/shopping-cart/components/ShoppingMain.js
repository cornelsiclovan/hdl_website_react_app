import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../shared/components/UIElements/Footer';

const ShoppingMain = () => {

    return (
        <React.Fragment>
            <div class="shopping-main">
                    <nav class="shopping-main__nav">
                        <ul class="shopping-main__list">
                            <li class="shopping-main__item"> 
                                <Link to="/shopping-cart">
                                    <a href="#" class="shopping-main__link--selected">
                                        <span class="shopping-main__link--selected-number">1</span> 
                                        Shopping Cart
                                    </a>
                                </Link>
                            </li>
                            <li class="shopping-main__item">
                                <Link to="/billing">
                                    <a href="#" class="shopping-main__link">
                                        <span class="shopping-main__link-number">2</span>   
                                        Billing & Delivery
                                    </a>
                                </Link>
                            </li>
                            <li class="shopping-main__item">
                                <Link to="/review_payment">
                                    <a href="#" class="shopping-main__link">
                                        <span class="shopping-main__link-number">3</span> 
                                        Review and Payment
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>  

            <div class="continue-shopping"> 
                            
                <Link class="btn-text" to="/products">
                    <a  style={{paddingTop:"2rem"}}> &larr; &nbsp; continue shopping &nbsp;  </a>
                </Link>
            </div>
        </React.Fragment>
    );
}

export default ShoppingMain;