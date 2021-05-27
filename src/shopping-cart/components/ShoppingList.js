import React from 'react';
import { Link } from 'react-router-dom';


import ShoppingListItem from './ShoppingListItem';

const ShoppingList = (props) => {

    return(
        <React.Fragment>
            <div class="continue-shopping"> 
                 <h1 style={{color:"black"}}>Your shopping cart</h1>
            </div>
            <div class="section-cart">
                <div class="section-cart__left">
                   {    
                        props.currentOrder.orders[0].products 
                        && props.currentOrder.orders[0].products.map( 
                            product => 
                        
                        <
                            ShoppingListItem 
                            product={product} 
                            currentOrder={props.currentOrder}
                            qtyInputOnChangeHandler={props.qtyInputOnChangeHandler}
                            onRemoveProductFromCartHandler={props.onRemoveProductFromCartHandler}
                            onAddToCartClickHandler={props.onAddToCartClickHandler}
                            />
                   )}
                </div>    
                <div class="section-cart__right">
                    <div class="section-cart__right--card">
                        <ul class="section-cart__right--list">
                            <li class="section-cart__right--item">
                                <span class="section-cart__text">
                                    Subtotal (excl. VAT) 
                                </span>
                                <span class="section-cart__price">
                                    10.80 Eur 
                                </span>
                            </li>
                            <li class="section-cart__right--item">
                                <span class="section-cart__text">
                                    <b>Total with tax</b>
                                </span>
                                <span class="section-cart__price">
                                    <b>10.80 Eur</b>
                                </span>
                            </li>
                        </ul>
                        <span class="section-cart__right--comment">Review your shopping cart and checkout</span>
                    </div>
                    <center>
                        {
                            props.modify &&
                            <Link to="/billing" style={{marginTop: 1+"rem"}} className="btn btn--mov">
                                Checkout   
                            </Link>
                        }
                        {
                            !props.modify && 
                            <a  style={{marginTop: 1+"rem"}} className="btn btn--mov" onClick={props.onClickSubmitOrderHandler}>
                                Checkout   
                            </a>
                        }
                    </center>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ShoppingList;