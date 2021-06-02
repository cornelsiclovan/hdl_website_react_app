import React from 'react';
import { Link } from 'react-router-dom';

import '../../../icon-shop.css'

const ShoppingCart = () => {  
 
    return (
       <Link to='shopping-cart'> 
            <div className="shopping-cart"> 
                <label className="shopping-cart__button">
                    <i className="shopping-cart__icon icon-ecommerce-cart"></i>
                </label>   

            </div>
        </Link>
    );
}

export default ShoppingCart;