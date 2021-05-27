import React, { useState } from 'react';
import { Link } from 'react-router-dom';




const ShoppingMain = (props) => {
  
    return (
        <React.Fragment>
            <div className="shopping-main">
                    <nav className="shopping-main__nav">
                        <ul className="shopping-main__list">
                            
                            {  
                                props.shoppingCart &&
                                <li className="shopping-main__item"> 
                                    <Link to="/shopping-cart" >
                                        <a href="" className="shopping-main__link--selected" >
                                            <span className="shopping-main__link--selected-number">1</span> 
                                            Shopping Cart
                                        </a>
                                    </Link>
                                </li>
                            }
                            {
                                (props.billing || props.review) &&
                                <li className="shopping-main__item"> 
                                    <Link to="/shopping-cart" className="shopping-main__link">
                                        <span className="shopping-main__link-number">1</span> 
                                        Shopping Cart
                                    </Link>
                                </li>
                            }
                            
                            
                            
                            { 
                                props.billing &&
                                <li className="shopping-main__item">
                                    <Link to="/billing" >
                                        <a href="" className="shopping-main__link--selected"> 
                                            <span className="shopping-main__link--selected-number">2</span>   
                                            Billing & Delivery
                                        </a>
                                    </Link>
                                </li>
                            }
                            {
                                (props.shoppingCart || props.review) &&
                                <li className="shopping-main__item">
                                <Link to="/billing" className="shopping-main__link">
                                   
                                        <span className="shopping-main__link-number">2</span>   
                                        Billing & Delivery
                                  
                                </Link>
                            </li>
                            }

                            {
                                props.review && 
                                <li className="shopping-main__item">
                                    <Link to="/review_payment" >
                                        <a href="" className="shopping-main__link--selected">
                                            <span className="shopping-main__link--selected-number">3</span> 
                                            Review and Payment
                                        </a>
                                    </Link>
                                </li>
                            }

                            {
                                (props.shoppingCart || props.billing) &&
                                <li className="shopping-main__item">
                                    <Link to="/review_payment"  className="shopping-main__link">
                                        
                                            <span className="shopping-main__link-number">3</span> 
                                            Review and Payment
                              
                                    </Link>
                                </li>
                            }
                            
                        </ul>
                    </nav>
                </div>  

            <div className="continue-shopping"> 
                            
                <Link className="btn-text" to="/products">
                    <a  style={{paddingTop:"2rem"}}> &larr; &nbsp; continue shopping &nbsp;  </a>
                </Link>
            </div>
        </React.Fragment>
    );
}

export default ShoppingMain;