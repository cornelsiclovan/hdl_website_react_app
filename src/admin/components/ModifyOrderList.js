import React from 'react';
import { Link } from 'react-router-dom';
import ModifyOrder from '../pages/ModifyOrder';


import ModifyOrderItem from './ModifyOrderItem';

const ModifyOrderList = (props) => {

    return(
        <React.Fragment>
            <div class="continue-shopping"> 
                 <h1 style={{color:"black"}}>Modify this order</h1>
            </div>
            <div class="section-cart">
                <div class="section-cart__left">
                   {    
                        props.currentOrder.products 
                        && props.currentOrder.products.map( 
                            product => 
                        
                        <
                            ModifyOrderItem 
                            product={product} 
                            currentOrder={props.currentOrder}
                            qtyInputOnChangeHandler={props.qtyInputOnChangeHandler}
                            onRemoveProductFromCartHandler={props.onRemoveProductFromCartHandler}
                            onAddToCartClickHandler={props.onAddToCartClickHandler}
                            review={props.review}
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
                            <Link to="/admin" style={{marginTop: 1+"rem"}} className="btn btn--mov">
                                Done   
                            </Link>
                        }
                        {
                            !props.modify && 
                            <a href="/admin"  style={{marginTop: 1+"rem"}} className="btn btn--mov" onClick={props.onClickSubmitOrderHandler}>
                                Done   
                            </a>
                        }
                    </center>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ModifyOrderList;